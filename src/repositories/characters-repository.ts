import { QueryResult } from "pg";
import { connection } from "../database/database.js";
import { Character } from "../protocols.js";

async function getCharacters(): Promise<QueryResult<Character>> {
    return connection.query(`
        SELECT * FROM characters;
    `)
}

const characterRepository = {
    getCharacters
};

export default characterRepository;