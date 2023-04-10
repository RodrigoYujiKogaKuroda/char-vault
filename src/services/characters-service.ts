import characterRepository from '../repositories/characters-repository.js'
import { Character } from '../protocols.js';

async function createCharacter(char: Character) {
    await characterRepository.postCharacter(char);
}

async function getCharacterList() {
    const characterList = await characterRepository.getCharacters();
    return characterList.rows[0];
}

const charactersService = {
    createCharacter,
    getCharacterList
};
  
export default charactersService;