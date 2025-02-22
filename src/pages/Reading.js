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

function Reading() {
  const [content, setContent] = useState(() => {
    const cached = localStorage.getItem('readingContent');
    return cached || '';
  });

  const fetchContent = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/pages`);
      const pageName = 'Reading';
      const page = response.data.find(p => p.title === pageName);
      if (page && page.content !== content) {  // Only update if content is different
        setContent(page.content);
        localStorage.setItem('readingContent', page.content);
        localStorage.setItem('readingLastFetch', Date.now().toString());
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      const cached = localStorage.getItem('readingContent');
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
      <div className="last-edited">2 December 2024 at 10:15 PM</div>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

export default Reading;