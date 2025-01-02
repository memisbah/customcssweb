// File: pages/contact.js (or pages/contact.tsx if using TypeScript)
import React from 'react';


const Contact = () => {
  return (
    <div id="contact-page">
      <h2 id="contact-heading">Contact Me</h2>
      <p id="intro-text">
        If you have any questions or want to collaborate, feel free to reach out. I'm always open to connecting with like-minded individuals and learning new things.
      </p>

      <h3 id="social-heading">Social Media</h3>
      <ul id="social-links">
        <li><a href="https://github.com/memisbah" target="_blank" rel="noopener noreferrer" id="github-link">GitHub</a></li>
        <li><a href="https://vercel.com/memisbahs-projects" target="_blank" rel="noopener noreferrer" id="vercel-link">Vercel</a></li>
      </ul>

      <h3 id="hobbies-heading">Hobbies & Interests</h3>
      <p id="hobbies-text">
        Outside of coding, I enjoy exploring new design trends, contributing to tech communities, 
        and participating in coding challenges. I believe that creativity plays an essential role in technology, 
        and I try to incorporate that mindset in my work.
      </p>

      <h3 id="future-goals-heading">Future Goals</h3>
      <p id="future-goals-text">
        In the near future, I hope to expand my knowledge in full-stack development and contribute to open-source projects. 
        My goal is to continuously evolve as a developer and bring innovative ideas to life.
      </p>
    </div>
  );
}

export default Contact;
