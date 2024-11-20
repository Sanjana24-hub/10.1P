require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mailgun = require('mailgun-js');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3010;

// Mailgun Configuration
const DOMAIN = "sandbox3f48f6062a614611936b3175b00d96be.mailgun.org";
const mg = mailgun({
  apiKey: "964ed5eaa4856046e63da96cf40ce0c8-6df690bb-0159708c",
  domain: DOMAIN,
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to send email
app.post('/send-email', (req, res) => {
  const { email } = req.body; // Get recipient email from the request body

  const data = {
    from: "sanjana4809.be23 <you@sandbox3f48f6062a614611936b3175b00d96be.mailgun.org>", // Sender
    to: email, // Dynamic recipient email
    subject: "Welcome!! You have Subscribed Successfully..",
    text: "Thank you for subscribing to our DEV@Deakin.",
    html: `
      <h1>Welcome!!</h1>
      <p>Thank you for subscribing to <strong>DEV@Deakin</strong>.</p>
      <p>We are excited to have you with us!</p>
    `,
  };

  // Send email using Mailgun
  mg.messages().send(data, function (error, body) {
    if (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Error in sending email", error });
    } else {
      console.log("Email sent successfully:", body);
      res.status(200).json({ message: "Email sent successfully!", id: body.id });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
