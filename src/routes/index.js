const express = require('express');
const Subscriber = require('../models/Subscriber');

const router = express.Router();

router.get('/', (req, res) => {
  return res.render('index');
});

router.post('/', async (req, res) => {
  const { email } = req.body;

  await Subscriber.create({ email });

  return res.render('thanks');
});

router.post('/greet', (req, res) => {
  const { name } = req.body;

  return res.json({
    hello: `Hello, ${name}`
  });
});

module.exports = router;