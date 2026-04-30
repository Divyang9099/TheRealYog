import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    sessionInterest: 'Group',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      await axios.post(`${API_URL}/inquiries`, formData);
      setStatus('success');
      setFormData({ name: '', mobileNumber: '', sessionInterest: 'Group', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage(error.response?.data?.error || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-24 bg-sand-100" id="contact">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-xl overflow-hidden max-w-6xl mx-auto">
          
          {/* Left Side: Image */}
          <div className="w-full lg:w-5/12 relative min-h-[400px] lg:min-h-full">
            <img 
              src="https://res.cloudinary.com/dhowmzdkh/image/upload/v1777523432/mansukh-padmasana.jpg" 
              alt="Mansukhbhai Gujarati Yoga Coach performing Padmasana (Lotus Pose)" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-3xl font-bold text-white mb-2">Begin Your Journey</h3>
              <p className="text-sand-200">Connect with Mansukhbhai for private or group sessions and take the first step towards inner peace.</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-7/12 p-8 md:p-12 lg:p-16">
            <h2 className="text-sm font-bold text-forest-500 uppercase tracking-widest mb-2">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-forest-900 tracking-tight mb-8">Book a Session</h3>
            
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-2xl p-8 text-center shadow-inner">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-2xl font-bold mb-2">Inquiry Sent Successfully!</h4>
                <p className="text-green-700">Namaste. We will get back to you shortly to confirm your session.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors shadow-sm"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm border border-red-200">
                    {errorMessage}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-forest-800 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-sand-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="mobileNumber" className="block text-sm font-semibold text-forest-800 mb-2">Mobile Number</label>
                    <input 
                      type="tel" 
                      id="mobileNumber" 
                      name="mobileNumber" 
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-sand-50"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="sessionInterest" className="block text-sm font-semibold text-forest-800 mb-2">Session Interest</label>
                  <select 
                    id="sessionInterest" 
                    name="sessionInterest" 
                    value={formData.sessionInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-sand-50"
                  >
                    <option value="Group">Group Class</option>
                    <option value="Private">Private 1-on-1 Session</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-forest-800 mb-2">Message or Goal</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-sand-50 resize-none"
                    placeholder="Tell us what you'd like to achieve..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-forest-600 text-white font-bold py-4 rounded-xl hover:bg-forest-700 transition-colors shadow-md flex justify-center items-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Inquiry...
                    </>
                  ) : (
                    'Submit Inquiry'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
