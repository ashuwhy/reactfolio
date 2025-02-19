import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MusicPlayer = () => {
  const iframeRef = useRef(null);
  const location = useLocation();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle visibility changes (tab switching)
  useEffect(() => {
    function handleVisibilityChange() {
      const iframe = iframeRef.current;
      if (!iframe) return;

      if (document.hidden) {
        // Pause video when tab is not visible
        iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    }

    // Listen for visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (iframeRef.current && isFirstLoad) {
      const iframe = iframeRef.current;
      iframe.setAttribute('importance', 'low');
      iframe.setAttribute('loading', 'lazy');
      iframe.setAttribute('decoding', 'async');
      
      // Add YouTube API ready event listener
      window.onYouTubeIframeAPIReady = () => {
        new window.YT.Player(iframe, {
          events: {
            onReady: (event) => {
              event.target.setPlaybackQuality('small');
            }
          }
        });
      };

      setIsFirstLoad(false);
    }
  }, [isFirstLoad]);

  // Don't update src on location change
  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
  }, [location]);

  // useEffect(() => {
  //   // Function to inject custom styles into the YouTube iframe
  //   const injectStyles = () => {
  //     try {
  //       const iframe = iframeRef.current;
  //       if (!iframe) return;

  //       const player = iframe.contentWindow;
  //       if (!player) return;

  //       // const customStyles = `
  //       //   .ytp-large-play-button {
  //       //     background: var(--background-secondary) !important;
  //       //     border: 2px solid #E0A628 !important;
  //       //     border-radius: 12px !important;
  //       //     transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
  //       //   }

  //       //   .ytp-large-play-button:hover {
  //       //     background: #E0A628 !important;
  //       //     transform: scale(1.05) !important;
  //       //   }

  //       //   .ytp-large-play-button svg {
  //       //     fill: #E0A628 !important;
  //       //     opacity: 0.9 !important;
  //       //   }

  //       //   .ytp-large-play-button:hover svg {
  //       //     fill: var(--background) !important;
  //       //   }

  //       //   .ytp-large-play-button-red-bg {
  //       //     background: none !important;
  //       //   }
  //       // `;

  //       const styleSheet = document.createElement('style');
  //       styleSheet.textContent = customStyles;
  //       player.document.head.appendChild(styleSheet);
  //     } catch (error) {
  //       console.log('Failed to inject styles:', error);
  //     }
  //   };

  //   // Add event listener for when iframe loads
  //   const iframe = iframeRef.current;
  //   if (iframe) {
  //     iframe.addEventListener('load', injectStyles);
  //   }

  //   return () => {
  //     if (iframe) {
  //       iframe.removeEventListener('load', injectStyles);
  //     }
  //   };
  // }, []);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleLoad);
      }
    };
  }, []);

  return (
    <div className="music-player">
      <div className={`player-wrapper ${isLoaded ? 'loaded' : ''}`}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="80"
          src="https://www.youtube.com/embed?listType=playlist&list=PLX8PoUALBJOnl-vV773i4i8wPKBINQ9MG&controls=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&origin=ashuwhy.vercel.app&widget_referrer=ashuwhy.vercel.app&autoplay=0&version=3&html5=1&color=white&theme=dark"
          title="YouTube Music Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
          importance="low"
          sandbox="allow-same-origin allow-scripts allow-presentation"
        />
      </div>
    </div>
  );
};

export default MusicPlayer; 