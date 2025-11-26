const express = require('express');
const bodyParser = require('body-parser');
const activityRoutes = require('./routes/activity');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use('/activity', activityRoutes);

app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});
