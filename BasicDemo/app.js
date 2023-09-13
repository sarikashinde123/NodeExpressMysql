
// import the Express framework
const express = require('express');
//instantiate the Express app;
const bodyParser = require('body-parser');
const cors = require('cors');
//set port 
const port = 3000;
const app = express();
const bookRoutes = require('./routes/book')
//const tutorialRoutes = require('./routes/tutorial');
//using squlise
const tutorialRoutes1 = require("./routes/tutorial1");

app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/book', bookRoutes);

const db = require("./models/index");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
app.use('/tutorial1', tutorialRoutes1);

//app.use("/tutorial", tutorialRoutes);

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
//we need to install a middleware called body-parser, which helps us decode the body from an HTTP request:
//It parses the body of the request and lets us react to it accordingly.
//$ npm install --save body-parser
//$ npm install --save cors
//npm install sequelize




