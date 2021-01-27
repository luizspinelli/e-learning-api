import FakeLessonRepository from '../repositories/fakes/FakeLessonRepository';
import CreateLessonService from './CreateLessonService';
import UpdateLessonService from './UpdateLessonService';

let createLesson: CreateLessonService;
let updateLesson: UpdateLessonService;
let fakeLessonsRepository: FakeLessonRepository;

describe('UpdateCourse', () => {
  beforeEach(() => {
    fakeLessonsRepository = new FakeLessonRepository();

    createLesson = new CreateLessonService(fakeLessonsRepository);
    updateLesson = new UpdateLessonService(fakeLessonsRepository);
  });

  it('should be able to update a course', async () => {
    const lesson = await createLesson.execute({
      name: 'Aula de Java',
      description: 'descrição da aula de java',
      course_id: '001',
      duration: 60,
      video_id: '001',
    });

    const updatedLesson = await updateLesson.execute({
      id: lesson.id,
      name: 'Aula de React',
      description: 'descrição da aula de React',
      course_id: '001',
      duration: 60,
      video_id: '001',
    });

    expect(updatedLesson.name).toEqual('Aula de React');
  });
});
