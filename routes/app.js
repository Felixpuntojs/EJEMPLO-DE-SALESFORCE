const express = require('express');
const bodyParser = require('body-parser');
const activityRoutes = require('./routes/activity');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear el cuerpo de las peticiones como JSON
app.use(bodyParser.json());

// Rutas de la actividad (todas bajo /activity)
app.use('/activity', activityRoutes);

app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});
