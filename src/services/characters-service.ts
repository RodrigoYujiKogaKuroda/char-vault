import characterRepository from '../repositories/characters-repository.js'
import { Character } from '../protocols.js';

async function createCharacter(char: Character) {
    await characterRepository.postCharacter(char);
}

async function getCharacterList() {
    const characterList = await characterRepository.getCharacters();
    return characterList.rows[0];
}

async function findCharacterById(id: number) {
    const character = await characterRepository.getCharacterById(id);
    return character.rows[0];
}

async function levelUpCharacterById(char: Character, id: number) {
    await characterRepository.levelUpCharacter(char.level, id);
}

const charactersService = {
    createCharacter,
    findCharacterById,
    getCharacterList,
    levelUpCharacterById
};
  
export default charactersService;