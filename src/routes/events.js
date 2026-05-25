const express = require('express');
const router = express.Router();

// memoria temporal (luego usamos DB)
let events = [];

// GET eventos
router.get('/', (req, res) => {
  res.json(events);
});

// POST evento
router.post('/', (req, res) => {
  const event = {
    id: Date.now(),
    ...req.body
  };

  events.push(event);

  // enviar a frontend en tiempo real
  global.broadcast({
    type: "NEW_EVENT",
    data: event
  });

  res.status(201).json(event);
});

module.exports = router;

