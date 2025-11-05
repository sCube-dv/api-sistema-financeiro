import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

/* express instance */
const app = express();

/* mock */
const users = [
    {
        id: 1,
        name: 'Maria',
        email: 'maria@email.com'
    },
    {
        id: 2,
        name: 'José',
        email: 'jose@email.com'
    },
    {
        id: 3,
        name: 'Ana',
        email: 'ana@email.com'
    }
]

/* middlewares */
app.use(cors());
app.use(express.json()); // enable json read

/* routes */
app.get('/', (req, res) => {
    res.status(200).send("<h1>Server Online!</h1>");
})

/* show all users */
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

/* insert new data */
app.post('/users', (req, res) => {
    /* add new object */
    users.push(req.body);
    res.status(201).send('Seleção cadastrada com sucesso!');
});
                


export default app;
