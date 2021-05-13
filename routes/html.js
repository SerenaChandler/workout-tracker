const path = require('path');

// ROUTING

module.exports = (app) => {


  app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  });

  app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  });

  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
