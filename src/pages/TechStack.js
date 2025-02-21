import React, { useEffect, useState, useCallback } from 'react';
import BackButton from '../components/BackButton';
import axios from 'axios';

function TechStack() {
  const [content, setContent] = useState(() => {
    const cached = localStorage.getItem('techStackContent');
    return cached || '';
  });

  const fetchContent = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/pages`);
      const pageName = 'Tech Stack';
      const page = response.data.find(p => p.title === pageName);
      if (page) {
        setContent(page.content);
        localStorage.setItem('techStackContent', page.content);
        localStorage.setItem('techStackLastFetch', Date.now().toString());
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      const cached = localStorage.getItem('techStackContent');
      if (cached) setContent(cached);
    }
  }, []); // Empty dependency array since it doesn't use any props or state

  useEffect(() => {
    fetchContent();
    const interval = setInterval(fetchContent, 30000);
    return () => clearInterval(interval);
  }, [fetchContent]); // Add fetchContent to dependency array

  return (
    <>
      <BackButton />
      <div className="last-edited">12 December 2024 at 2:30 PM</div>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

export default TechStack;