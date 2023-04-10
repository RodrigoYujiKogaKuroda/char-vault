import { Router } from 'express';
import { createCharacter, findAllCharacters } from '../controllers/characters-controller.js';
import { characterSchemaValidation } from "../middlewares/characterSchemaValidation-middleware.js";

const charactersRouter = Router();

charactersRouter.get('/characters', findAllCharacters);
charactersRouter.post('/characters', characterSchemaValidation, createCharacter);

export { charactersRouter };