const express = require('express');
const router = express.Router();

let patients = [];
let idCounter = 1;

// GET all patients
router.get('/', (req, res) => res.json(patients));

// GET patient by ID
router.get('/:id', (req, res) => {
  const patient = patients.find(p => p._id == req.params.id);
  if (!patient) return res.status(404).json({ message: "Patient not found" });
  res.json(patient);
});

// POST new patient
router.post('/', (req, res) => {
  const patient = { _id: idCounter++, ...req.body };
  patients.push(patient);
  res.status(201).json(patient);
});

// PUT update patient
router.put('/:id', (req, res) => {
  const index = patients.findIndex(p => p._id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Patient not found" });
  patients[index] = { ...patients[index], ...req.body };
  res.json(patients[index]);
});

// DELETE patient
router.delete('/:id', (req, res) => {
  patients = patients.filter(p => p._id != req.params.id);
  res.json({ message: "Patient deleted" });
});

module.exports = router;
