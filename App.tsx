import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { motion } from 'framer-motion';

// Page Transition Wrapper
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="w-full min-h-[70vh] max-w-[1920px] mx-auto pt-12"
  >
    {children}
  </motion.div>
);

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary-container selection:text-white">
      <Layout activePage={activePage} onNavigate={setActivePage}>
        {activePage === 'home' && <PageWrapper><HeroSection /></PageWrapper>}
        {activePage === 'about' && <PageWrapper><AboutSection /></PageWrapper>}
        {activePage === 'projects' && <PageWrapper><ProjectsSection /></PageWrapper>}
        {activePage === 'skills' && <PageWrapper><SkillsSection /></PageWrapper>}
        {activePage === 'contact' && <PageWrapper><ContactSection /></PageWrapper>}
      </Layout>
    </div>
  );
}

export default App;
