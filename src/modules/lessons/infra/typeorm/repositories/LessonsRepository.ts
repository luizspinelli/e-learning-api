import ICreateLessonDTO from '@modules/lessons/dtos/ICreateLessonDTO';
import IUpdateLessonDTO from '@modules/lessons/dtos/IUpdateLessonDTO';
import ILessonsRepository from '@modules/lessons/repositories/ILessonsRepository';
import AppError from '@shared/errors/AppError';
import { getRepository, Repository } from 'typeorm';
import Lesson from '../entities/Lesson';

class LessonsRepository implements ILessonsRepository {
  private ormRepository: Repository<Lesson>;

  constructor() {
    this.ormRepository = getRepository(Lesson);
  }

  public async create(data: ICreateLessonDTO): Promise<Lesson> {
    const lesson = this.ormRepository.create(data);

    await this.ormRepository.save(lesson);

    return lesson;
  }

  public async findById(id: string): Promise<Lesson | undefined> {
    const lesson = await this.ormRepository.findOne({ where: { id } });

    return lesson;
  }

  public async update(data: IUpdateLessonDTO): Promise<Lesson> {
    const lesson = await this.ormRepository.findOne({ where: { id: data.id } });

    if (!lesson) {
      throw new AppError('Lesson does not exist');
    }

    Object.assign(lesson, data);

    await this.ormRepository.save(lesson);

    return lesson;
  }
}

export default LessonsRepository;
