import AppError from '@shared/errors/AppError';
import FakeCoursesRepository from '../repositories/fakes/FakeCoursesRepository';
import CreateCourseService from './CreateCourseService';
import UpdateCourseService from './UpdateCourseService';

let createCourse: CreateCourseService;
let updateCourse: UpdateCourseService;
let fakeCoursesRepository: FakeCoursesRepository;

describe('UpdateCourse', () => {
  beforeEach(() => {
    fakeCoursesRepository = new FakeCoursesRepository();

    createCourse = new CreateCourseService(fakeCoursesRepository);
    updateCourse = new UpdateCourseService(fakeCoursesRepository);
  });

  it('should be able to update a course', async () => {
    const course = await createCourse.execute({
      name: 'Java',
      image: '123456',
    });

    const updatedCourse = await updateCourse.execute({
      id: course.id,
      name: 'react',
      image: '321654',
    });

    expect(updatedCourse.name).toEqual('react');
  });
});
