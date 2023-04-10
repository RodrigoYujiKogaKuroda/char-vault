import characterRepository from '../repositories/characters-repository.js'

async function getCharacterList() {
    const characterList = await characterRepository.getCharacters();
    return characterList.rows[0];
}

const charactersService = {
    getCharacterList
};
  
export default charactersService;