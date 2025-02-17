import React from 'react';
import BackButton from '../components/BackButton';

function AboutMe() {
  return (
    <>
      <BackButton />
      <div className="last-edited">3 January 2025 at 8:47 PM</div>
      <div className="content">
        <h1>about me</h1>
        <p>
          hey there! i'm ashutosh, a computer science student at IIT Kharagpur (class of '27) with a passion for building innovative solutions to real-world problems.
          <br />
          when i'm not coding or attending classes, you'll find me diving into space exploration theories, working on music production
        </p>

        <h2>currently</h2>
        <ul>
          <li>pursuing computer science & engineering at IIT Kharagpur</li>
          <li>developing <a href="https://github.com/ashuwhy/lang.as" target="_blank" rel="noopener noreferrer">lang.as</a></li>
          <li>working on "mood classifier" (name pending) - an application powered by essentia.js [private]</li>
          <li>exploring AI/ML frontiers, crafting intelligent systems and experimenting with neural architectures</li>
          <li>learning about space missions</li>
          <li>and making music!</li>
        </ul>

        <h2>projects</h2>
        <ul>
          <li><a href="https://github.com/ashuwhy/lang.as" target="_blank" rel="noopener noreferrer">lang.as</a> - multi-language hybrid compiler with high-performance array operations</li>
          <li>created <a href="https://github.com/ashuwhy/poplyrics-1k" target="_blank" rel="noopener noreferrer">poplyrics-1k</a> - a custom dataset for training LLaMA 3.2-3b</li>
          <li>developed <a href="https://github.com/ashuwhy/AbleSpleeter" target="_blank" rel="noopener noreferrer">ablespleeter</a> - a max audio separation tool for ableton</li>
          <li>built <a href="https://github.com/ashuwhy/4thcipher" target="_blank" rel="noopener noreferrer">4thcipher</a> - result of my intrest in cryptography and encryption techniques</li>
          <li>and a lot more on my <a href="https://github.com/ashuwhy/" target="_blank" rel="noopener noreferrer">github</a></li>
        </ul>

        <h2>interests</h2>
        <ul>
          <li>programming & coding - executing my ideas and solutions into reality</li>
          <li>music production - creating mainly pop and electronic tracks, my taste ranges from classical to the latest mainstream</li>
          <li>ai/ml - learning about the latest in tech and implementing them in projects</li>
          <li>space exploration - learning about satellites, with Voyager 1 &amp; 2 and their computers being my initial inspiration into space</li>
        </ul>

        <h2>skills &amp; tools</h2>
        <ul>
          <li>languages - python (primary), javascript/typescript, java/kotlin, c/c++</li>
          <li>web development - react.js, next.js, django, node.js, postgresql, mongodb</li>
          <li>machine learning - tensorflow, pytorch, pandas, numpy</li>
          <li>development - vs code, neovim, git, docker, aws, vercel</li>
          <li>creative - figma, adobe suite, fl studio, ableton live</li>
        </ul>
      </div>
    </>
  );
}

export default AboutMe; 