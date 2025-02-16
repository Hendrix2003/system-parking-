const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; 

app.use(cors());

app.use(express.json());

// Variable para almacenar el conteo de vehículos Hendrix 25-1062 .....
let vehicleCount = 0;

// Ruta para incrementar el conteo
app.post('/enter', (req, res) => {
  vehicleCount++;
  res.status(200).send({ count: vehicleCount });
});

// Ruta para decrementar el conteo
app.post('/exit', (req, res) => {
  vehicleCount--;
  res.status(200).send({ count: vehicleCount });
});

// Ruta para obtener el conteo actual
app.get('/count', (req, res) => {
  res.status(200).send({ count: vehicleCount });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
