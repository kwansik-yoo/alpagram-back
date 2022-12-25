import Logic from '../logic';

import { Router } from 'express';
import nextError from './nextError';

const router = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/sign-up', nextError(async (req, res) => {
    const { id, name, password } = req.body;
    const result = await Logic.UserLogic.signUp(id, name, password);
    res.send(result);
}));

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/log-in', nextError(async (req, res) => {
    const { id, password } = req.body;
    const result = await Logic.UserLogic.login(id, password);
    res.send(result);
}));

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/log-out', nextError(async (req, res) => {
    const { id } = req.body;
    const result = await Logic.UserLogic.logout(id);
    res.send(result);
}));

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.put('/:userId', nextError(async (req, res) => {
    const { name } = req.body;
    const { userId } = req.params;
    const result = await Logic.UserLogic.updateName(userId, name);
    res.send(result);
}));

export default router;
