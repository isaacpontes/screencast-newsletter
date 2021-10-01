const express = require('express');
const routes = require('./routes/index');

const app = express();

app.use(express.json());

app.use(routes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`App is now running on port ${PORT}`);
});