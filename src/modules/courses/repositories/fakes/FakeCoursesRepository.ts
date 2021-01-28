import ICreateCourseDTO from '@modules/courses/dtos/ICreateCourseDTO';
import IUpdateCourseDTO from '@modules/courses/dtos/IUpdateCourseDTO';
import Course from '@modules/courses/infra/typeorm/entities/Course';
import AppError from '@shared/errors/AppError';
import { uuid } from 'uuidv4';
import ICoursesRepository from '../ICoursesRepository';

class FakeCoursesRepository implements ICoursesRepository {
  private courses: Course[] = [];

  public async create(data: ICreateCourseDTO): Promise<Course> {
    const course = new Course();

    Object.assign(course, { id: uuid() }, data);

    this.courses.push(course);

    return course;
  }

  public async findById(id: string): Promise<Course | undefined> {
    const filteredCourse = this.courses.find(course => course.id === id);

    return filteredCourse;
  }

  public async update(data: IUpdateCourseDTO): Promise<Course> {
    const course = await this.findById(data.id);

    if (!course) {
      throw new AppError('Course does not exist');
    }

    Object.assign(course, data);

    this.courses.push(course);

    return course;
  }

  public async list(): Promise<Course[]> {
    return this.courses;
  }
}

export default FakeCoursesRepository;
