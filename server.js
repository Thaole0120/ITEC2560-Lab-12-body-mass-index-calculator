const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index'); // Import routes

const app = express();

// Set up Handlebars as the template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the routes defined in routes/index.js
app.use('/', indexRouter);

// Start the server
const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port', server.address().port);
});