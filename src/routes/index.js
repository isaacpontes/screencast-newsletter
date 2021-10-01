const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  return res.send('Hello, world!');
});

router.post('/', (req, res) => {
  return res.json({
    hello: "Hello, world!"
  });
});

router.post('/greet', (req, res) => {
  const { name } = req.body;

  return res.json({
    hello: `Hello, ${name}`
  });
});

module.exports = router;