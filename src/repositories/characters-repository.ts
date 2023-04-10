import { QueryResult } from "pg";
import { connection } from "../database/database.js";
import { Character } from "../protocols.js";

async function deleteCharacter(id: number) {
    return connection.query(
        "DELETE FROM characters WHERE id = $1;",
        [id]
    )
}

async function getCharacters(): Promise<QueryResult<Character>> {
    return connection.query(
        "SELECT * FROM characters;"
    )
}

async function getCharacterById(id: number): Promise<QueryResult<Character>> {
    return connection.query(
        "SELECT * FROM characters WHERE id = $1;",
        [id]
    )
}

async function levelUpCharacter(level: number, id: number) {
    return connection.query(
        "UPDATE characters SET level = $1 + 1 WHERE id = $2;",
        [level, id]
    );
}

async function postCharacter(char: Character) {
    return connection.query(
        "INSERT INTO characters (name, race, class, level) VALUES ($1, $2, $3, $4);",
        [char.name, char.race, char.class, char.level]
    );
}

const characterRepository = {
    deleteCharacter,
    getCharacters,
    getCharacterById,
    levelUpCharacter,
    postCharacter
};

export default characterRepository;