import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IUpdateLessonDTO from '../dtos/IUpdateLessonDTO';
import Lesson from '../infra/typeorm/entities/Lesson';

import ILessonsRepository from '../repositories/ILessonsRepository';

@injectable()
class UpdateLessonService {
  constructor(
    @inject('LessonsRepository')
    private lessonsRepository: ILessonsRepository,
  ) {}

  public async execute(data: IUpdateLessonDTO): Promise<Lesson> {
    const lesson = await this.lessonsRepository.findById(data.id);

    if (lesson === undefined) {
      throw new AppError('Lesson does not exist');
    }

    const updatedCourse = await this.lessonsRepository.update(data);

    return updatedCourse;
  }
}

export default UpdateLessonService;
