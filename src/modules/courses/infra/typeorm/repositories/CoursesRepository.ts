import ICreateCourseDTO from '@modules/courses/dtos/ICreateCourseDTO';
import IUpdateCourseDTO from '@modules/courses/dtos/IUpdateCourseDTO';
import ICoursesRepository from '@modules/courses/repositories/ICoursesRepository';
import AppError from '@shared/errors/AppError';
import { getRepository, Repository } from 'typeorm';
import Course from '../entities/Course';

class CoursesRepository implements ICoursesRepository {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }

  public async create(data: ICreateCourseDTO): Promise<Course> {
    const course = this.ormRepository.create(data);

    await this.ormRepository.save(course);

    return course;
  }

  public async findById(id: string): Promise<Course | undefined> {
    const course = await this.ormRepository.findOne({ where: { id } });

    return course;
  }

  public async update(data: IUpdateCourseDTO): Promise<Course> {
    const course = await this.ormRepository.findOne({ where: { id: data.id } });

    if (!course) {
      throw new AppError('Course does not exist');
    }

    Object.assign(course, data);

    await this.ormRepository.save(course);

    return course;
  }
}

export default CoursesRepository;
