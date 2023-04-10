import { Router } from 'express';
import { createCharacter, deleteCharacter, findAllCharacters, levelUpCharacter } from '../controllers/characters-controller.js';
import { characterSchemaValidation } from "../middlewares/characterSchemaValidation-middleware.js";

const charactersRouter = Router();

charactersRouter.delete('/characters/:id', deleteCharacter);
charactersRouter.get('/characters', findAllCharacters);
charactersRouter.post('/characters', characterSchemaValidation, createCharacter);
charactersRouter.put('/characters/:id', levelUpCharacter);

export { charactersRouter };