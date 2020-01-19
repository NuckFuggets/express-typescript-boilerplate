import { Response, Request, NextFunction } from 'express';

export function errorHandler(
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
) {
    console.error(error.stack);
    response.status(500).send('Something broke!');
}
