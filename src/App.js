import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import AboutMe from './pages/AboutMe';
import Links from './pages/Links';
import Reading from './pages/Reading';
import TechStack from './pages/TechStack';
import MobileIndexPage from './pages/MobileIndexPage'; // Component for the index view (notes sidebar)
import './App.css';
import './index.css';
import './styles/pages.css';
import './styles/styles.css';

function App() {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // While we detect the viewport size, you can return null or a spinner.
  if (isMobile === null) {
    return null;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={isMobile ? <MobileIndexPage /> : <Navigate replace to="/about" />}
          />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/links" element={<Links />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/tech-stack" element={<TechStack />} />
        </Routes>
      </Layout>
      <Analytics />
    </Router>
  );
}

export default App;
