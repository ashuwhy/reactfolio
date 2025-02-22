/**
 * Apple Notes Portfolio
 * Original Author: Ashutosh Sharma (@ashuwhy)
 * GitHub: https://github.com/ashuwhy/reactfolio
 *
 * While this template is available for use, proper attribution
 * to the original author is required.
 */

import React, { useEffect, useState, useCallback } from 'react';
import BackButton from '../components/BackButton';
import axios from 'axios';

function AboutMe() {
  const [content, setContent] = useState(() => {
    const cached = localStorage.getItem('aboutmeContent');
    return cached || '';
  });

  const fetchContent = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/pages`);
      const pageName = 'About Me';
      const page = response.data.find(p => p.title === pageName);
      if (page && page.content !== content) {
        setContent(page.content);
        localStorage.setItem('aboutmeContent', page.content);
        localStorage.setItem('aboutmeLastFetch', Date.now().toString());
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      const cached = localStorage.getItem('aboutmeContent');
      if (cached) setContent(cached);
    }
  }, [content]);

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