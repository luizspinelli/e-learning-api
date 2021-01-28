import FakeCoursesRepository from '../repositories/fakes/FakeCoursesRepository';
import CreateCourseService from './CreateCourseService';
import ListAllCoursesService from './ListAllCoursesService';

let createCourse: CreateCourseService;
let listCourses: ListAllCoursesService;
let fakeCoursesRepository: FakeCoursesRepository;

describe('ListAllCourses', () => {
  beforeEach(() => {
    fakeCoursesRepository = new FakeCoursesRepository();

    createCourse = new CreateCourseService(fakeCoursesRepository);
    listCourses = new ListAllCoursesService(fakeCoursesRepository);
  });

  it('should be able to create a new course', async () => {
    const course1 = await createCourse.execute({
      name: 'Java',
      image: '123456',
    });

    const course2 = await createCourse.execute({
      name: 'React',
      image: '123456',
    });

    const courses = await listCourses.execute();

    expect(courses).toEqual([course1, course2]);
  });
});
