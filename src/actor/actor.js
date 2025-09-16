import {  BSONType, ObjectId } from "mongodb";

export const Actor = {
    _id: ObjectId,
    idPelicula: String,
    nombre: String,
    edad: int,
    estaRetirado: bool,
    premios: array
}