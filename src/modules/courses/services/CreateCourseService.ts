import { inject, injectable } from 'tsyringe';
import ICreateCourseDTO from '../dtos/ICreateCourseDTO';

import Course from '../infra/typeorm/entities/Course';
import ICoursesRepository from '../repositories/ICoursesRepository';

@injectable()
class CreateCourseService {
  constructor(
    @inject('CoursesRepository')
    private usersRepository: ICoursesRepository,
  ) {}

  public async execute(data: ICreateCourseDTO): Promise<Course> {
    const course = await this.usersRepository.create(data);

    return course;
  }
}

export default CreateCourseService;
