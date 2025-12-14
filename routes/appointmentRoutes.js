const express = require('express');
const router = express.Router();

let appointments = [];
let idCounter = 1;

router.get('/', (req, res) => res.json(appointments));

router.post('/', (req, res) => {
  const appointment = { _id: idCounter++, ...req.body };
  appointments.push(appointment);
  res.status(201).json(appointment);
});

// GET appointment by ID
router.get('/:id', (req, res) => {
  const appointment = appointments.find(a => a.id == req.params.id);
  if (!appointment) return res.status(404).json({ message: "Appointment not found" });
  res.json(appointment);
});


router.delete('/:id', (req, res) => {
  appointments = appointments.filter(a => a._id != req.params.id);
  res.json({ message: "Appointment deleted" });
});

module.exports = router;
