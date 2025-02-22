import React, { useEffect, useState, useCallback } from 'react';
import BackButton from '../components/BackButton';
import axios from 'axios';

function Links() {
  const [content, setContent] = useState(() => {
    // Initialize from localStorage if available
    const cached = localStorage.getItem('linksContent');
    return cached || '';
  });

  const fetchContent = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/pages`);
      const pageName = 'Links';
      const page = response.data.find(p => p.title === pageName);
      if (page && page.content !== content) {  // Only update if content is different
        setContent(page.content);
        localStorage.setItem('linksContent', page.content);
        localStorage.setItem('linksLastFetch', Date.now().toString());
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      const cached = localStorage.getItem('linksContent');
      if (cached) setContent(cached);
    }
  }, [content]);

  useEffect(() => {
    fetchContent();
    
    // Poll for updates every 30 seconds
    const interval = setInterval(fetchContent, 30000);
    return () => clearInterval(interval);
  }, [fetchContent]);

  return (
    <>
      <BackButton />
      <div className="last-edited">5 January 2025 at 11:23 PM</div>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

export default Links;