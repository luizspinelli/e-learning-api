import { Router } from 'express';

import SessionsController from '@modules/users/infra/http/controllers/sessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
