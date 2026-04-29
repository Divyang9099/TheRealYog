import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import SkillsGrid from './components/SkillsGrid';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import ContactForm from './components/ContactForm';
import AdminDashboard from './components/AdminDashboard';
import SocialFloat from './components/SocialFloat';

// The main public facing website
const LandingPage = () => (
  <>
    <Navbar />
    <Hero />
    <TrustBar />
    <About />
    <SkillsGrid />
    <Programs />
    <Gallery />
    <VideoSection />
    <ContactForm />
  </>
);

function App() {
  return (
    <div className="bg-sand-100 min-h-screen">
      {/* Global sticky social buttons - visible on all pages */}
      <SocialFloat />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
