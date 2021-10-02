const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const sequelize = require('./database');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`App is now running on port ${PORT}`);

  sequelize.authenticate().then(() => {
    console.log('Connected to PostgreSQL');
  });
});