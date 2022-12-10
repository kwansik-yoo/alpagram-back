import Logic from '../../logic';

import { Router } from 'express';

const router = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/sign-up', async (req, res) => {
    const { id, name, password } = req.body;
    const result = await Logic.UserLogic.signUp(id, name, password);
    res.send(result);
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/log-in', async (req, res) => {
    const { id, password } = req.body;
    const result = await Logic.UserLogic.login(id, password);
    res.send(result);
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/log-in', async (req, res) => {
    const { id } = req.body;
    const result = await Logic.UserLogic.logout(id);
    res.send(result);
});

export default router;
