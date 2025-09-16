import { ObjectId}  from "mongodb";
import Client from "../common/db.js";

const ActorCollection = Client.db('cine').collection('actores');
const PeliculaCollection = Client.db('cine').collection('peliculas');


async function handleInsertActorRequest(req, res) {
    let data = req.body;
    let actor = actor

    actor._id = data._id
    actor.idPelicula = data.idPelicula
    actor.nombre = data.nombre
    actor.edad = data.edad
    actor.estaRetirado = data.estaRetirado
    actor.premios = data.premios}

    await ActorCollection.insertOne(actor)
    .then((data) => {
        if(data === null) return res.status(400).send('Error al guardar.')
})
    .catch((e) => {return res.status(500).send({ error: e }) })

async function handleGetActoresRequest(req, res) {
    await ActorCollection.find({}).toArray()
    .then((data) => { return res.status(200).send(data) })
    .catch((e) => { return res.status(500).send({ error: e }) })
}

async function hangleGetActorByIdRequest(req, res) {
    let id = req.params.id;

    try {
        let oid = ObjectId.createFromHexString(id);

        await ActorCollection.findOne({ _id: oid })
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

async function handleGetActoresByPeliculaIdRequest(req, res) {
    const peliculaId = req.params.id;

    try {
        const actores = await ActorCollection.find({ idPelicula: peliculaId }).toArray();
        
        if (actores.length === 0) return res.status(404).send(data)
            return res.status(200).send([]);
        

        return res.status(200).send(actores);

    } catch (e) {
        return res.status(500).send('Error, vuelva a intentar.');
    }
}