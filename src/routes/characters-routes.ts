import { Router } from 'express';
import { createCharacter, findAllCharacters } from '../controllers/characters-controller.js'

const charactersRouter = Router();

charactersRouter.get('/characters', findAllCharacters);
charactersRouter.post('/characters', createCharacter);

export { charactersRouter };