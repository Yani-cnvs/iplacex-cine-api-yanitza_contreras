import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = 'mongodb+srv://yanicontrerasv:Yani1703@eva-u3-express.7vl9boz.mongodb.net/?retryWrites=true&w=majority&appName=eva-u3-express'

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export default client;