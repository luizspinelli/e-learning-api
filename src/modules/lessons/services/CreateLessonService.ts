import { inject, injectable } from 'tsyringe';
import ICreateLessonDTO from '../dtos/ICreateLessonDTO';

import Lesson from '../infra/typeorm/entities/Lesson';
import ILessonsRepository from '../repositories/ILessonsRepository';

@injectable()
class CreateLessonService {
  constructor(
    @inject('LessonsRepository')
    private lessonsRepository: ILessonsRepository,
  ) {}

  public async execute(data: ICreateLessonDTO): Promise<Lesson> {
    const course = await this.lessonsRepository.create(data);

    return course;
  }
}

export default CreateLessonService;
