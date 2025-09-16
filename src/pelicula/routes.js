import express from 'express';
import controller from './pelicula.controller.js';

const peliculaRoutes = express.Router();

peliculaRoutes.post('/pelicula', controller.handleInsertPeliculaRequest);
peliculaRoutes.get('/peliculas', controller.handleGetPeliculasRequest);
peliculaRoutes.get('/pelicula/:id', controller.handleGetPeliculaByIdRequest);
peliculaRoutes.put('/pelicula/:id', controller.handleUpdatePeliculaByIdRequest);
peliculaRoutes.delete('/pelicula/:id', controller.handleDeletePeliculaByIdRequest);

export default peliculaRoutes;