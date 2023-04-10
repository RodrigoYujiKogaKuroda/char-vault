import { Request, Response } from "express";
import charactersService from '../services/characters-service.js';

export async function createCharacter(req: Request, res: Response) {

    const char = req.body;

    try {
        await charactersService.createCharacter(char);
        return res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error.message);
    }

}

export async function findAllCharacters(req: Request, res: Response) {

    try {
        const characters = await charactersService.getCharacterList();
        return res.status(200).send(characters);
    } catch (error) {
        return res.status(500).send(error.message);
    }

}

export async function levelUpCharacter(req: Request, res: Response) {

    const id = Number(req.params.id);

    try {
        const character = await charactersService.findCharacterById(id);
        await charactersService.levelUpCharacterById(character, id);
        return res.status(200).send(`${character.name} updated! Actual level: ${character.level}`);
    } catch (error) {
        return res.status(500).send(error.message);
    }

}