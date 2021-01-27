import FakeLessonRepository from '../repositories/fakes/FakeLessonRepository';
import CreateLessonService from './CreateLessonService';

let createLesson: CreateLessonService;
let fakeLessonsRepository: FakeLessonRepository;

describe('CreateLesson', () => {
  beforeEach(() => {
    fakeLessonsRepository = new FakeLessonRepository();

    createLesson = new CreateLessonService(fakeLessonsRepository);
  });

  it('should be able to create a new lesson', async () => {
    const lesson = await createLesson.execute({
      name: 'Aula de Java',
      description: 'descrição da aula de java',
      course_id: '001',
      duration: 60,
      video_id: '001',
    });

    expect(lesson).toHaveProperty('id');
  });
});
