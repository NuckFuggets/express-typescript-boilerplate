import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    throw new Error('Hello');
    res.send('Hello World!');
});

export default router;
