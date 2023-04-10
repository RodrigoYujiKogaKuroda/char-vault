import { NextFunction, Request, Response } from 'express';
import { characterSchema } from '../schemas/characters-schemas.js';

export async function characterSchemaValidation(req: Request, res: Response, next: NextFunction) {
    const { error } = characterSchema.validate(req.body, {
        abortEarly: false,
    });

    if (!error) {
        next();
    } else {
        return res.status(422).send(error.message);
    }
}