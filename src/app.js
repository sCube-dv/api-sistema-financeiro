import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

/* express instance */
const app = express();

/* middlewares */
app.use(cors());
app.use(express.json());

/* routes */
app.get('/', (req, res) => {
    res.status(200).send("<h1>Server Online!</h1>");
})


export default app;
