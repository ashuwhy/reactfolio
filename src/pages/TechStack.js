import React from 'react';
import BackButton from '../components/BackButton';

function TechStack() {
  return (
    <>
      <BackButton />
      <div className="last-edited">12 December 2024 at 2:30 PM</div>
      <div className="content">
        <h1>tech stack</h1>
        <p>my digital toolkit - a curated collection of technologies i use to bring ideas to life.</p>

        <h2>core languages</h2>
        <ul>
          <li>python - my go-to language for ML/AI, data science, and backend magic</li>
          <li>javascript/typescript - crafting modern web experiences and scalable applications</li>
          <li>java/kotlin - building robust android apps and enterprise solutions</li>
          <li>c/c++ - when performance is crucial and system-level control is needed</li>
        </ul>

        <h2>web ecosystem</h2>
        <ul>
          <li>react.js - building interactive user interfaces</li>
          <li>next.js - for performance-optimized web applications</li>
          <li>tailwind css - rapid, utility-first styling</li>
          <li>django - robust python-based backend framework</li>
          <li>node.js/express - for scalable, event-driven applications</li>
          <li>postgresql - reliable relational data storage</li>
          <li>mongodb - flexible document-based storage</li>
          <li>redis - lightning-fast caching and real-time features</li>
        </ul>

        <h2>ai &amp; machine learning</h2>
        <ul>
          <li>tensorflow - production-ready ML pipelines</li>
          <li>pytorch - research and rapid prototyping</li>
          <li>scikit-learn - classical ML algorithms</li>
          <li>pandas &amp; numpy - data manipulation wizardry</li>
          <li>matplotlib &amp; plotly - data visualization</li>
        </ul>

        <h2>development workflow</h2>
        <ul>
          <li>neovim - customized for maximum productivity</li>
          <li>vs code - versatile modern development</li>
          <li>jetbrains suite - language-specific powertools</li>
          <li>git &amp; github - version control and collaboration</li>
          <li>docker - containerization and deployment</li>
          <li>kubernetes - container orchestration</li>
          <li>aws - comprehensive cloud infrastructure</li>
          <li>vercel - frontend deployment and optimization</li>
          <li>digital ocean - simple and reliable hosting</li>
        </ul>

        <h2>creative suite</h2>
        <ul>
          <li>figma - collaborative interface design</li>
          <li>adobe suite - comprehensive creative tools</li>
          <li>ableton live - music production and composition</li>
          <li>fl studio - for drums and beat-making</li>
        </ul>

        <h2>space exploration</h2>
        <ul>
          <li>NASA's eyes - real-time space mission tracking</li>
          <li>celestia - 3D space visualization</li>
          <li>stellarium - detailed astronomical observations</li>
        </ul>
      </div>
    </>
  );
}

export default TechStack; 