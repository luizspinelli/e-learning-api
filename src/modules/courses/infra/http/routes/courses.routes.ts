import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import CoursesController from '../controllers/coursesController';

const coursesRouter = Router();
const coursesController = new CoursesController();

coursesRouter.post('/', ensureAuthenticated, coursesController.create);
coursesRouter.put('/:id', ensureAuthenticated, coursesController.update);

export default coursesRouter;
