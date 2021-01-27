import CreateLessonService from '@modules/lessons/services/CreateLessonService';
import UpdateLessonService from '@modules/lessons/services/UpdateLessonService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class LessonsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createLesson = container.resolve(CreateLessonService);

    const lesson = await createLesson.execute(data);

    return response.json(lesson);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data = request.body;

    const updateLesson = container.resolve(UpdateLessonService);

    const lesson = await updateLesson.execute({
      id,
      ...data,
    });

    return response.json(lesson);
  }
}
