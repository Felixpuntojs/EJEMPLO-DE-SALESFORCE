const express = require('express');
const router = express.Router();

// Define todas las rutas de actividad
router.post('/execute', (req, res) => {
  // lógica de ejecución
  res.json({ status: 'execute hecho' });
});

router.post('/save', (req, res) => {
  // lógica de guardado
  res.json({ status: 'save hecho' });
});

router.post('/publish', (req, res) => {
  // lógica de publicación
  res.json({ status: 'publish hecho' });
});

router.post('/validate', (req, res) => {
  // lógica de validación
  res.json({ status: 'validate hecho' });
});

router.post('/stop', (req, res) => {
  // lógica de stop
  res.json({ status: 'stop hecho' });
});

module.exports = router;
