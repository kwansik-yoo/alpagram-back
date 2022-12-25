import Logic from '../logic';

import { Router } from 'express';
import nextError from './nextError';

const router = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/send', nextError(async (req, res) => {
    const { writerId, message, roomId } = req.body;
    const result = await Logic.ChatLogic.send(writerId, message, roomId);
    res.send(result);
}));

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/send-first-direct-message', nextError(async (req, res) => {
    const { writerId, message, receiverId } = req.body;
    const result = await Logic.ChatLogic.sendFirstDirectMessage(writerId, message, receiverId);
    res.send(result);
}));

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/send-first-group-message', nextError(async (req, res) => {
    const { writerId, message, memberIds } = req.body;
    const result = await Logic.ChatLogic.sendFirstGroupMessage(writerId, message, memberIds);
    res.send(result);
}));

export default router;
