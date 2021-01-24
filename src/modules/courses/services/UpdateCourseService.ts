import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import ICreateCourseDTO from '../dtos/ICreateCourseDTO';
import IUpdateCourseDTO from '../dtos/IUpdateCourseDTO';

import Course from '../infra/typeorm/entities/Course';
import ICoursesRepository from '../repositories/ICoursesRepository';

@injectable()
class UpdateCourseService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository,
  ) {}

  public async execute(data: IUpdateCourseDTO): Promise<Course> {
    const course = await this.coursesRepository.findById(data.id);

    if (course === undefined) {
      throw new AppError('Course does not exist');
    }

    const updatedCourse = await this.coursesRepository.update(data);

    return updatedCourse;
  }
}

export default UpdateCourseService;
