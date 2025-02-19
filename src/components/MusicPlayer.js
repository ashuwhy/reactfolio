import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function MusicPlayer() {
  const iframeRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Lazy load the iframe when component mounts
    if (iframeRef.current) {
      iframeRef.current.loading = 'lazy';
      
      // Add performance attributes
      const iframe = iframeRef.current;
      iframe.setAttribute('importance', 'low');
      iframe.setAttribute('loading', 'lazy');
      iframe.setAttribute('decoding', 'async');
    }
  }, []);

  // Preserve iframe state during navigation
  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe && iframe.src) {
      const currentSrc = iframe.src;
      iframe.src = currentSrc;
    }
  }, [location]);

  return (
    <div className="music-player">
      <iframe
        ref={iframeRef}
        width="100%"
        height="80"
        src="https://www.youtube.com/embed?listType=playlist&list=PLX8PoUALBJOnl-vV773i4i8wPKBINQ9MG&controls=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&origin=ashuwhy.vercel.app"
        title="YouTube Music Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        loading="lazy"
        importance="low"
        sandbox="allow-same-origin allow-scripts allow-presentation"
      ></iframe>
    </div>
  );
}

export default MusicPlayer; 