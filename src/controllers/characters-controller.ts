import { Request, Response } from "express";
import charactersService from '../services/characters-service.js';

export async function createCharacter(req: Request, res: Response) {



}

export async function findAllCharacters(req: Request, res: Response) {

    try {
        const characters = await charactersService.getCharacterList();
        return res.status(200).send(characters);
    } catch (error) {
        return res.sendStatus(500);
    }

}