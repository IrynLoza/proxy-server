const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
// create server
const app = express();

// middleware function to handle parse application/json
// bodyParser module to handle body in http POST requests
app.use(bodyParser.json());

app.use((req, res, next) => {
  const currentTime = new Date();
  console.info(`***Endpoint: ${req.originalUrl} - Time: ${currentTime}***`);
  next();
});

// middleware function to handle endpoints
app.use(routes);

// run and listen the connections to 3000 port
app.listen(3000, () => {
  console.info('Server is running port 3000');
});
