import { Router } from 'express';

import sampleRouter from './sample';

const router = Router();

router.use(sampleRouter);

export default router;

