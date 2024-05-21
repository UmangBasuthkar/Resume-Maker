import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'

function Home() {
  return (
    <div>
      <header>
        <h1>Welcome to Resume Builder!</h1>
      </header>
      <br /><br /><br />
      <div className="container">
        <h3>Easy to use!</h3>
        <ul>
          <li>Choose a template</li>
          <li>Enter your details</li>
          <li>Download your resume</li>
        </ul>
        <h3>No need to do any kind of formatting from your side</h3>
        <Link to = "/ResumeForm">
            <button className = 'btn'>Get Started!</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
