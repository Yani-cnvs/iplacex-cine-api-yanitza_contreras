import { ObjectId}  from "mongodb";
import Client from "../common/db.js";
import { Pelicula } from "./pelicula.js";

const PeliculaCollection = Client.db('cine').collection('peliculas');

async function handleInsertPeliculaRequest(req, res) {
    let data = req.body;
    let pelicula = Pelicula

    pelicula._id = data._id
    pelicula.nombre = data.nombre
    pelicula.género = data.género
    pelicula.anioEstreno = data.anioEstreno

    await PeliculaCollection.insertOne(pelicula)
    .then((data) => {
        if(data === null) return res.status(400).send('Error al guardar.')
})
    .catch((e) => {return res.status(500).send({ error: e }) })}


async function handleGetPeliculasRequest(req, res) {
    await PeliculaCollection.find({}).toArray()
    .then((data) => { return res.status(200).send(data) })
    .catch((e) => { return res.status(500).send({ error: e }) })
}

async function hangleGetPeliculaByIdRequest(req, res) {
    let id = req.params.id;

    try {
        let oid = ObjectId.createFromHexString(id);

        await PeliculaCollection.findOne({ _id: oid })
        .then((data) => {
            if (data === null) return res.status(404).send(data)
                return res.status(200).send(data)
        })
        .catch((e) => { return res.status(500).send({ error: e }) } )
    }
    catch(e) {
        return res.status(400).send('Id mal formado');
    }
}

async function handleUpdatePeliculaByIdRequest(req, res) {
    let id = req.params.id;
    let pelicula = req.body;

    try{
        let oid = ObjectId.createFromHexString(id);

        let query = { $set: {pelicula}}

        await PeliculaCollection.updateOne({ _id: oid }, query)
        .then((data) => { return res.status(200).send(data)})
        .catch((e) => { return res.status(500).send({ error: e }) }) }
        catch(e) {
            return res.status(400).send('Id mal formado');
        }
}

async function handleDeletePeliculaRequest(req, res) {
    let id = req.params.id;

    try {
        let oid = ObjectId.createFromHexString(id);

        await PeliculaCollection.deleteOne({_id: oid})
        .then ((data) => { return res.status(200).send(data)})
        .catch((e) => { return res.status(500).send({code: e}) }) }
        catch(e) {
            return res.status(400).send('Id mal formado');
        }
    }