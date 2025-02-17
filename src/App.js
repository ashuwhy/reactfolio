import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import AboutMe from './pages/AboutMe';
import Links from './pages/Links';
import Reading from './pages/Reading';
import TechStack from './pages/TechStack';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* If you want the root to show About Me, you can redirect */}
          <Route path="/" element={<Navigate replace to="/about" />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/links" element={<Links />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/tech-stack" element={<TechStack />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
