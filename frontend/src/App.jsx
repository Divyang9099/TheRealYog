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

// Detail pages
import BiographyPage    from './pages/BiographyPage';
import SkillDetailPage  from './pages/SkillDetailPage';
import ProgramDetailPage from './pages/ProgramDetailPage';

// The main public-facing landing page
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
      {/* Global sticky social buttons — visible on all pages */}
      <SocialFloat />
      <Routes>
        {/* Landing page */}
        <Route path="/"              element={<LandingPage />} />

        {/* Biography */}
        <Route path="/biography"     element={<BiographyPage />} />

        {/* Skills / Disciplines */}
        <Route path="/skill/:slug"   element={<SkillDetailPage />} />

        {/* Programs */}
        <Route path="/program/:slug" element={<ProgramDetailPage />} />

        {/* Admin */}
        <Route path="/admin"         element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
