import React from 'react';
import BackButton from '../components/BackButton';

function Links() {
  return (
    <>
      <BackButton />
      <div className="last-edited">5 January 2025 at 11:23 PM</div>
      <div className="content">
        <h1>links</h1>
        <p>not super active on social media, but you can find me on these platforms:</p>

        <h2>social</h2>
        <ul>
          <li><a href="https://github.com/ashuwhy" target="_blank" rel="noopener noreferrer">github</a> - where i share my code when i feel like it</li>
          <li><a href="https://twitter.com/ashuwhy" target="_blank" rel="noopener noreferrer">twitter</a> - occasional thoughts and updates (just made)</li>
          <li><a href="https://instagram.com/ashuwhy" target="_blank" rel="noopener noreferrer">instagram</a> - i share my art sometimes</li>
          <li><a href="https://linkedin.com/in/ashuwhy" target="_blank" rel="noopener noreferrer">linkedin</a> - professional connections</li>
        </ul>

        <h2>music</h2>
        <ul>
          <li><a href="https://soundcloud.com/ashuwhy" target="_blank" rel="noopener noreferrer">soundcloud</a> - where i will share my music</li>
        </ul>

        <h2>contact</h2>
        <ul>
          <li><a href="mailto:ashutoshsharmawhy@gmail.com">email</a> - best way to reach me</li>
        </ul>
      </div>
    </>
  );
}

export default Links; 