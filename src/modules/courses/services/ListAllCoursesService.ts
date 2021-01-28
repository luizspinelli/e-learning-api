import { inject, injectable } from 'tsyringe';
import ICreateCourseDTO from '../dtos/ICreateCourseDTO';

import Course from '../infra/typeorm/entities/Course';
import ICoursesRepository from '../repositories/ICoursesRepository';

@injectable()
class ListAllCoursesService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository,
  ) {}

  public async execute(): Promise<Course[]> {
    const courses = await this.coursesRepository.list();

    return courses;
  }
}

export default ListAllCoursesService;
