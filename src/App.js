import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import AboutMe from './pages/AboutMe';
import Links from './pages/Links';
import Reading from './pages/Reading';
import TechStack from './pages/TechStack';
import MobileIndexPage from './pages/MobileIndexPage'; // Component for the index view (notes sidebar)
import Edit from './pages/Edit';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import './App.css';
import './index.css';
import './styles/pages.css';
import './styles/styles.css';
import axios from 'axios';
import initialData from './backend/initial.json';
import Spinner from './components/Spinner';

function App() {
  const [isMobile, setIsMobile] = useState(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (isInitialLoad) {
      const processInitialData = () => {
        if (isMobile) {
          // On mobile: process in small chunks using requestAnimationFrame
          let index = 0;
          const processNext = () => {
            if (index < initialData.length) {
              const page = initialData[index];
              const key = `${page.title.toLowerCase().replace(/\s/g, '')}Content`;
              const lastFetchKey = `${page.title.toLowerCase().replace(/\s/g, '')}LastFetch`;
              const lastFetch = localStorage.getItem(lastFetchKey);
              const isStale = !lastFetch || Date.now() - parseInt(lastFetch) > 300000;
              if (!localStorage.getItem(key) || isStale) {
                localStorage.setItem(key, page.content);
                localStorage.setItem(lastFetchKey, Date.now().toString());
              }
              index++;
              // Yield to the event loop before processing the next item
              requestAnimationFrame(processNext);
            } else {
              setIsInitialLoad(false);
              setIsLoading(false);
            }
          };
          processNext();
        } else {
          // On desktop: process all data at once
          initialData.forEach(page => {
            const key = `${page.title.toLowerCase().replace(/\s/g, '')}Content`;
            const lastFetchKey = `${page.title.toLowerCase().replace(/\s/g, '')}LastFetch`;
            const lastFetch = localStorage.getItem(lastFetchKey);
            const isStale = !lastFetch || Date.now() - parseInt(lastFetch) > 300000;
            if (!localStorage.getItem(key) || isStale) {
              localStorage.setItem(key, page.content);
              localStorage.setItem(lastFetchKey, Date.now().toString());
            }
          });
          setIsInitialLoad(false);
          setIsLoading(false);
        }
      };

      processInitialData();
    }

    // Always fetch fresh content regardless of device type
    const preloadContent = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/pages`);
        response.data.forEach(page => {
          const key = `${page.title.toLowerCase().replace(/\s/g, '')}Content`;
          const lastFetchKey = `${page.title.toLowerCase().replace(/\s/g, '')}LastFetch`;
          localStorage.setItem(key, page.content);
          localStorage.setItem(lastFetchKey, Date.now().toString());
        });
      } catch (error) {
        console.error('Preload failed:', error);
      }
    };

    preloadContent();
  }, [isInitialLoad, isMobile]);

  if (isMobile === null || (isMobile && isLoading)) {
    return <Spinner />;
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
          <Route path="/edit" element={<ProtectedRoute><Edit /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
      <Analytics />
    </Router>
  );
}

export default App;
