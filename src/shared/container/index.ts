import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { container } from 'tsyringe';

import '@modules/users/providers';
import ICoursesRepository from '@modules/courses/repositories/ICoursesRepository';
import CoursesRepository from '@modules/courses/infra/typeorm/repositories/CoursesRepository';
import LessonsRepository from '@modules/lessons/infra/typeorm/repositories/LessonsRepository';
import ILessonsRepository from '@modules/lessons/repositories/ILessonsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICoursesRepository>(
  'CoursesRepository',
  CoursesRepository,
);
container.registerSingleton<ILessonsRepository>(
  'LessonsRepository',
  LessonsRepository,
);
