import { QueryResult } from "pg";
import { connection } from "../database/database.js";
import { Character } from "../protocols.js";

async function getCharacters(): Promise<QueryResult<Character>> {
    return connection.query(`
        SELECT * FROM characters;
    `)
}

async function postCharacter(char: Character) {
    return connection.query(
        "INSERT INTO characters (name, race, class, level) VALUES ($1, $2, $3, $4);",
        [char.name, char.race, char.class, char.level]
    );
}

const characterRepository = {
    getCharacters,
    postCharacter
};

export default characterRepository;