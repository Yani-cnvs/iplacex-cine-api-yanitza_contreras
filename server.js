import express, { urlencoded } from 'express';
import cors from 'cors';

import client from './src/common/db.js';
import routes from './src/pelicula/routes.js';

const PORTS = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => res.send("Bienvenido al cine Iplacex"));

app.use('/api', routes);

try {
    await client.connect();
    console.log('Conectado al clúster');

    app.listen(PORTS, () => console.log('Servidor corriendo en el puerto ' + PORTS));
} catch (e) {
    console.log('No se pudo conectar al clúster', e);
}