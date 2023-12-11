const express = require('express');
const router = require('./src/routes/index.js');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('server has started on port ' + PORT);
});
