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

/* function to find a user by id */
const findUserById = (id) => {
    return users.filter(user => user.id == id);
}

/* find index of object by id */
const findUserIndexById = (id) => {
    return users.findIndex(user => user.id == id);
}

/* middlewares */
app.use(cors());
app.use(express.json()); // enable json read

/* routes */
app.get('/', (req, res) => {
    res.status(200).send("API Sistema Financeiro");
});

/* show all users */
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

/* get user by id */
app.get('/users/:id', (req, res) => {
    res.json(findUserById(req.params.id));
});

/* insert new data */
app.post('/users', (req, res) => {
    /* add new object */
    users.push(req.body);
    res.status(201).send('Usuário cadastrado com sucesso!');
});

/* delete user */
app.delete('/users/:id', (req, res) => {
    let index = findUserIndexById(req.params.id);
    users.splice(index, 1);
    res.send('Usuário deletado com sucesso!')
});

/* update user */
app.put('/users/:id', (req, res) => {
    let index = findUserIndexById(req.params.id);
    users[index].name = req.body.name;
    users[index].email = req.body.email;
    res.json(users);
});


export default app;
