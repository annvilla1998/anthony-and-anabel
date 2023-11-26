// Allows access to env variables
require('dotenv').config()
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const dev = process.env.NODE_DEV !== 'production';
const url = dev ? `localhost:${PORT}` : "http://www.anthony-and-anabel.com/";
const db = require("./db/models");
const router = require("./routes/index");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend/')));
app.use('/api', router);
app.use(cors());


db.mongoose
  .connect(db.url)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });



app.listen(PORT, err => {
    if (err) throw err;
    console.log(`Server is running at ${url}`)
})