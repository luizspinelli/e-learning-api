import ICreateCourseDTO from '../dtos/ICreateCourseDTO';
import Course from '../infra/typeorm/entities/Course';

export default interface ICoursesRepository {
  create(data: ICreateCourseDTO): Promise<Course>;
  findById(id: string): Promise<Course | undefined>;
  update(data: ICreateCourseDTO): Promise<Course>;
}
