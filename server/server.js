// Import the necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const seedAll = require('./seeds/index');
const path = require('path');

// Start the server
const PORT = process.env.PORT || 3001;



// Create an instance of the Express application
const app = express();

// Use middleware to handle incoming requests
app.use(bodyParser.json());
app.use(cors());

// Import the route files
app.use(routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

// Test the database connection
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('Error: ' + err));

// turn on connection to db and server
sequelize.sync({ force: false }).then(async () => {
    await seedAll()
    await app.listen(PORT, () => {
        console.log(`App Listening on port ${PORT}`)
    });
  });