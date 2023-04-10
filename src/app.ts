import express from 'express';
import { charactersRouter } from './routes/characters-routes.js';

const server = express();

server
    .use(express.json())
    .use(charactersRouter);

const port = 4000;
server.listen(port, () => {
    console.log(`Server running in port: ${port}`)
})