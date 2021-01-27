import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import LessonsController from '../controller/lessonsController';

const lessonsRouter = Router();
const lessonsController = new LessonsController();

lessonsRouter.post('/', ensureAuthenticated, lessonsController.create);
lessonsRouter.put('/:id', ensureAuthenticated, lessonsController.update);

export default lessonsRouter;
