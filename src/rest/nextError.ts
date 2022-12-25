import { RequestHandler } from 'express';

const nextError: (handler: RequestHandler) => RequestHandler = (handler: RequestHandler) => (req, res, next) => {
    try {
        handler(req, res, next);
    } catch (e) {
        next(e);
    }
};

export default nextError;
