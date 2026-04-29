# TheRealYog 🧘‍♂️

A full-stack MERN application for **TheRealYog** — a premium yoga coaching platform for Mansukhbhai Gujarati, a certified yoga master with 20+ years of experience.

## Tech Stack
- **Frontend**: React 19 + Vite + Tailwind CSS v4 + Framer Motion
- **Backend**: Node.js + Express.js
- **Database**: MongoDB Atlas

## Setup Instructions

### Backend
```bash
cd backend
npm install
# Create a .env file with:
# PORT=5000
# MONGO_URI=your_mongodb_connection_string
# ADMIN_USERNAME=your_admin_username
# ADMIN_PASSWORD=your_admin_password
npm run dev
```

### Frontend
```bash
cd frontend
npm install --legacy-peer-deps
npm run dev
```

## Features
- Premium Hero section with background video
- Programs, Gallery, About, Skills sections
- Contact / Inquiry form (saved to MongoDB)
- Secure Admin Dashboard to view inquiries
- Sticky WhatsApp & Instagram social buttons
- Fully mobile-responsive design
