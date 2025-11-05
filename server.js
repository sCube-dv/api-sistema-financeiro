import app from './src/app.js';

/* running server */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
})
