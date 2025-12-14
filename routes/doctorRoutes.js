const express = require('express');
const router = express.Router();

let doctors = [];
let idCounter = 1;

router.get('/', (req, res) => res.json(doctors));

router.post('/', (req, res) => {
  const doctor = { _id: idCounter++, ...req.body };
  doctors.push(doctor);
  res.status(201).json(doctor);
});

// GET doctor by ID
router.get('/:id', async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', (req, res) => {
  doctors = doctors.filter(d => d._id != req.params.id);
  res.json({ message: "Doctor deleted" });
});

module.exports = router;
