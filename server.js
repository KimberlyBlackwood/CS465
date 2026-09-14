const express = require('express');
const path = require('path');
const app = express();

// Set up Handlebars view engine
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Serve static files (CSS, images, etc.)
app.use(express.static(__dirname));

// Import routes
const indexRouter = require('./app_server/routes/index');
app.use('/', indexRouter);

const aboutRouter = require('./app_server/routes/about');
app.use('/', aboutRouter);

const roomsRouter = require('./app_server/routes/rooms');
app.use('/', roomsRouter);

const mealsRouter = require('./app_server/routes/meals');
app.use('/', mealsRouter);

const travelRouter = require('./app_server/routes/travel');
app.use('/', travelRouter);

const newsRouter = require('./app_server/routes/news');
app.use('/', newsRouter);

const contactRouter = require('./app_server/routes/contact');
app.use('/', contactRouter);

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});





