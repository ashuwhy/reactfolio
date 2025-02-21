import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MusicPlayer = () => {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const location = useLocation();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [wasPlaying, setWasPlaying] = useState(false);

  // Handle visibility changes (e.g. when the tab is hidden)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!playerRef.current) return;

      if (document.hidden) {
        // Store current playing state before pausing
        setWasPlaying(playerRef.current.getPlayerState() === 1);
        playerRef.current.pauseVideo();
      } else if (wasPlaying) {
        // Resume only if it was playing before
        playerRef.current.playVideo();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [wasPlaying]);

  // Initialize the YouTube Player (runs once)
  useEffect(() => {
    if (iframeRef.current && isFirstLoad) {
      const iframe = iframeRef.current;
      iframe.setAttribute('importance', 'low');
      iframe.setAttribute('loading', 'lazy');
      iframe.setAttribute('decoding', 'async');

      const initializePlayer = () => {
        playerRef.current = new window.YT.Player(iframe, {
          events: {
            onReady: (event) => {
              const player = event.target;
              player.setPlaybackQuality('small');
              // Set the initial mute state
              if (isMuted) {
                player.mute();
              } else {
                player.unMute();
                // A user gesture may be needed if the browser blocks autoplay with sound
                player.playVideo();
              }
              setIsLoaded(true);
            },
          },
        });
      };

      if (window.YT && window.YT.Player) {
        initializePlayer();
      } else {
        // Load the YouTube API script and set the global callback
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = initializePlayer;
      }
      setIsFirstLoad(false);
    }// eslint-disable-next-line
  }, [isFirstLoad]);

  // Update the player whenever the mute state changes (only if the player is ready)
  useEffect(() => {
    if (
      isLoaded &&
      playerRef.current &&
      typeof playerRef.current.mute === 'function'
    ) {
      if (isMuted) {
        playerRef.current.mute();
      } else {
        playerRef.current.unMute();
        // Optionally trigger playback (if needed)
        playerRef.current.playVideo();
      }
    }
  }, [isMuted, isLoaded]);

  // Toggle mute state when the button is clicked
  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  // Pause video on route change
  useEffect(() => {
    if (
      playerRef.current &&
      typeof playerRef.current.pauseVideo === 'function'
    ) {
      playerRef.current.pauseVideo();
    }
  }, [location]);

  // Optional: Mark as loaded when the iframe load event fires
  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);
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

  useEffect(() => {
    if (iframeRef.current) {
      const message = {
        method: 'setVolume',
        value: isMuted ? 0 : 1
      };
      iframeRef.current.contentWindow.postMessage(JSON.stringify(message), '*');
    }
  }, [isMuted]);

  return (
    <div className="music-player">
      <div className={`player-wrapper ${isLoaded ? 'loaded' : ''}`}>
        <button
          className="sound-control-btn"
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <i className="fas fa-volume-mute"></i>
          ) : (
            <i className="fas fa-volume-up"></i>
          )}
        </button>
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