import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

const app = express();

/* middlewares */
app.use(cors());
app.use(express.json());

/* routes */
app.get('/', (req, res) => {
    res.status(200).send("<h1>Server Online!</h1>")
})


/* running server */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
})

