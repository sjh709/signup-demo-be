const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const mongoURI = `mongodb://localhose:27017/todo-demo`;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('mongoose connected'))
  .catch((err) => console.log('DB connection fail', err));

app.listen(4000, () => {
  console.log('server on 4000');
});
