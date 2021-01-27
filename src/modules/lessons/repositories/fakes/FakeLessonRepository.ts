import ICreateLessonDTO from '@modules/lessons/dtos/ICreateLessonDTO';
import IUpdateLessonDTO from '@modules/lessons/dtos/IUpdateLessonDTO';
import Lesson from '@modules/lessons/infra/typeorm/entities/Lesson';
import AppError from '@shared/errors/AppError';
import { uuid } from 'uuidv4';
import ILessonsRepository from '../ILessonsRepository';

class FakeLessonRepository implements ILessonsRepository {
  private lessons: Lesson[] = [];

  public async create(data: ICreateLessonDTO): Promise<Lesson> {
    const lesson = new Lesson();

    Object.assign(lesson, { id: uuid() }, data);

    this.lessons.push(lesson);

    return lesson;
  }

  public async findById(id: string): Promise<Lesson | undefined> {
    const filteredLesson = this.lessons.find(lesson => lesson.id === id);

    return filteredLesson;
  }

  public async update(data: IUpdateLessonDTO): Promise<Lesson> {
    const lesson = await this.findById(data.id);

    if (!lesson) {
      throw new AppError('Lesson does not exist');
    }

    Object.assign(lesson, data);

    this.lessons.push(lesson);

    return lesson;
  }
}

export default FakeLessonRepository;
