import React, { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  // State to track subscription success
  const [subscribed, setSubscribed] = useState(false);

  // Function to handle subscription
  const handleSubscribe = () => {
    setSubscribed(true); // Set subscribed to true when the button is clicked
  };

  return (
    <div className="newsletter">
      <h1>SIGN UP FOR OUR DAILY INSIDER</h1>
      {!subscribed ? (
        // Display the subscription form if not yet subscribed
        <>
          <input type="email" placeholder="Enter your email" />
          <button onClick={handleSubscribe}>Subscribe</button>
        </>
      ) : (
        // Show success message once subscribed
        <p className="success-message">Successfully subscribe</p>
      )}
    </div>
  );
}

export default Newsletter;
