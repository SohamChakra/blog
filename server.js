const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set up routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/contact', (req, res) => {
    // Process the form data here
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // You can perform further processing or store the form data in a database

    // Send a response back to the client
    res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});