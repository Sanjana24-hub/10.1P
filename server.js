require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const formData = require('form-data');
const Mailgun = require('mailgun.js');

const app = express();
const PORT = process.env.PORT || 3010;

// Initialize Mailgun
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Serving the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint to handle sending email
app.post('/send-email', async (req, res) => {
  const { email } = req.body;

  const data = {
    from: 'Devdeakin@exmaple.com', 
    to: 'sanjana4809.be23@chitkara.edu.in',
    subject: 'Welcome to the Newsletter!',
    text: 'Welcome to our newsletter! You have successfully subscribed.',
  };

  try {
    const response = await mg.messages.create(process.env.MAILGUN_DOMAIN, data);
    res.status(200).json({ message: 'Email sent successfully!', id: response.id });
  } catch (error) {
    console.error('Error:', error); // General error logging
    if (error.response) {
      console.error('Mailgun Error Response:', error.response.body);
    }
    res.status(500).json({ message: 'Error in sending email' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
