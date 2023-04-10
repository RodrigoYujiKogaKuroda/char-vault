import { connection } from "../database/database.js";

async function getCharacters() {
    return connection.query(`
        SELECT * FROM characters;
    `)
}

const characterRepository = {
    getCharacters,
};

export default characterRepository;