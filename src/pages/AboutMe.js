import React, { useEffect, useState, useCallback } from 'react';
import BackButton from '../components/BackButton';
import axios from 'axios';

function AboutMe() {
  const [content, setContent] = useState(() => {
    const cached = localStorage.getItem('aboutMeContent');
    return cached || '';
  });

  const fetchContent = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/pages`);
      const pageName = 'About Me';
      const page = response.data.find(p => p.title === pageName);
      if (page) {
        setContent(page.content);
        localStorage.setItem('aboutMeContent', page.content);
        localStorage.setItem('aboutMeLastFetch', Date.now().toString());
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      const cached = localStorage.getItem('aboutMeContent');
      if (cached) setContent(cached);
    }
  }, []);

  useEffect(() => {
    fetchContent();
    const interval = setInterval(fetchContent, 30000);
    return () => clearInterval(interval);
  }, [fetchContent]);

  return (
    <>
      <BackButton />
      <div className="last-edited">18 February 2025 at 11:47 AM</div>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

export default AboutMe;