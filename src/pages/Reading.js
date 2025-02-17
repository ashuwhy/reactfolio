import React from 'react';
import BackButton from '../components/BackButton';

function Reading() {
  return (
    <>
      <BackButton />
      <div className="last-edited">2 December 2024 at 10:15 PM</div>
      <div className="content">
        <h1>reading</h1>
        <p>books i'm currently reading and some of my favorites.</p>

        <h2>currently reading</h2>
        <ul>
          <li>
            <a href="https://www.amazon.com/Creative-Act-Way-Being/dp/0593652886" target="_blank" rel="noopener noreferrer">The Creative Act</a> - Rick Rubin
          </li>
          <li>
            <a href="https://www.amazon.in/Thinking-Systems-Donella-H-Meadows/dp/1603580557" target="_blank" rel="noopener noreferrer">Thinking in Systems</a> - Donella Meadows
          </li>
        </ul>

        <h2>have read</h2>
        <ul>
          <li>
            <a href="https://www.amazon.in/Discrete-Combinatorial-Mathematics-Ralph-Grimaldi/dp/8177584243" target="_blank" rel="noopener noreferrer">Discrete and Combinatorial Mathematics</a> - Ralph P. Grimaldi
          </li>
          <li>
            <a href="https://www.amazon.in/Signals-Systems-Oppenheim-Willsky-Hamid/dp/9332550239" target="_blank" rel="noopener noreferrer">Signal and System</a> - Alan Oppenheim
          </li>
          <li>
            <a href="https://www.amazon.com/Introduction-Algorithms-fourth-Thomas-Cormen/dp/026204630X" target="_blank" rel="noopener noreferrer">Introduction to Algorithms</a> - CLRS
          </li>
          <li>
            <a href="https://www.amazon.com/Computer-Systems-Programmers-Perspective-3rd/dp/013409266X" target="_blank" rel="noopener noreferrer">Computer Systems: A Programmer's Perspective</a> - Bryant, O'Hallaron
          </li>
        </ul>

        <h2>others</h2>
        <ul>
          <li>
            <a href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299" target="_blank" rel="noopener noreferrer">Atomic Habits</a> - James Clear
          </li>
          <li>
            <a href="https://www.amazon.com/Think-Grow-Rich-Landmark-Bestseller/dp/1585424331" target="_blank" rel="noopener noreferrer">Think and Grow Rich</a> - Napoleon Hill
          </li>
          <li>
            <a href="https://www.amazon.com/Creative-Act-Way-Being/dp/0593652886" target="_blank" rel="noopener noreferrer">The Creative Act</a> - Rick Rubin
          </li>
          <li>
            <a href="https://www.amazon.com/Foundation-Complete-Books-Trade-Paperback/dp/B09J7X3TQS" target="_blank" rel="noopener noreferrer">The Foundation</a> - Isaac Asimov
          </li>
        </ul>
      </div>
    </>
  );
}

export default Reading; 