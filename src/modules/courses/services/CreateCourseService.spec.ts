import FakeCoursesRepository from '../repositories/fakes/FakeCoursesRepository';
import CreateCourseService from './CreateCourseService';

let createCourse: CreateCourseService;
let fakeCoursesRepository: FakeCoursesRepository;

describe('CreateCourse', () => {
  beforeEach(() => {
    fakeCoursesRepository = new FakeCoursesRepository();

    createCourse = new CreateCourseService(fakeCoursesRepository);
  });

  it('should be able to create a new course', async () => {
    const course = await createCourse.execute({
      name: 'Java',
      image: '123456',
    });

    expect(course).toHaveProperty('id');
  });
});
