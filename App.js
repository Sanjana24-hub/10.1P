import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Newsletter from './Newsletter';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="newsletter-container">
        <Newsletter />
      </div>
      <div className="footer">
        <div className="section">
          <h3>Explore</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Questions</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Tutorials</a></li>
          </ul>
        </div>
        <div className="section">
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="section">
          <h3>Stay connected</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
