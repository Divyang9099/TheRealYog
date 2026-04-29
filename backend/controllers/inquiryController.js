const Inquiry = require('../models/Inquiry');

const createInquiry = async (req, res) => {
  try {
    const { name, mobileNumber, sessionInterest, message } = req.body;

    // Basic validation
    if (!name || !mobileNumber || !sessionInterest || !message) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    const newInquiry = new Inquiry({
      name,
      mobileNumber,
      sessionInterest,
      message
    });

    await newInquiry.save();

    res.status(201).json({ success: true, message: 'Inquiry submitted successfully!', data: newInquiry });
  } catch (error) {
    console.error('Error creating inquiry:', error);
    res.status(500).json({ success: false, error: 'Server error. Please try again later.' });
  }
};

const getInquiries = async (req, res) => {
  try {
    const username = req.headers['x-admin-username'];
    const password = req.headers['x-admin-password'];
    
    // Check both username and password securely from environment variables
    if (
      !username || !password ||
      username !== process.env.ADMIN_USERNAME || 
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({ error: 'Unauthorized access' });
    }
    
    // Fetch inquiries sorted by newest first
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    
    res.status(200).json({ success: true, data: inquiries });
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({ success: false, error: 'Server error. Please try again later.' });
  }
};

module.exports = {
  createInquiry,
  getInquiries
};
