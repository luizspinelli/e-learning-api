import ICreateLessonDTO from '../dtos/ICreateLessonDTO';
import IUpdateLessonDTO from '../dtos/IUpdateLessonDTO';
import Lesson from '../infra/typeorm/entities/Lesson';

export default interface ILessonsRepository {
  create(data: ICreateLessonDTO): Promise<Lesson>;
  findById(id: string): Promise<Lesson | undefined>;
  update(data: IUpdateLessonDTO): Promise<Lesson>;
}
