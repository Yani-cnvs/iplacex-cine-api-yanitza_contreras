import express, { urlencoded } from 'express';
import cors from 'cors';

import client from './src/common/db.js';
import routes from './src/pelicula/routes.js';

const PORTS = 3000 || 4000
const app = express();

app.use(express.json());
app.use(urlencoded( {extended: true }));
app.use(cors());

app.get("/", (req, res) => {res.send("Bienvenido al cine Iplacex");});

app.use('/api', routes);

await client.connect()
.then(() => console.log('Conectado al clúster'))
app.listen(PORTS, () => console.log('Servidor corriendo en el puerto ' + PORTS))
.catch(() => console.log('No se pudo conectar al clúster'))

app.use('/api/peliculas', peliculaRoutes); 
app.use('/api/actores', actorRoutes);