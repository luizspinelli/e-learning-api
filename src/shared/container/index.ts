import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { container } from 'tsyringe';

import '@modules/users/providers';
import ICoursesRepository from '@modules/courses/repositories/ICoursesRepository';
import CoursesRepository from '@modules/courses/infra/typeorm/repositories/CoursesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICoursesRepository>(
  'CoursesRepository',
  CoursesRepository,
);
