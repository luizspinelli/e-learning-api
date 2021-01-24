import CreateCourseService from '@modules/courses/services/CreateCourseService';
import UpdateCourseService from '@modules/courses/services/UpdateCourseService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class CoursesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createCourse = container.resolve(CreateCourseService);

    const course = await createCourse.execute(data);

    return response.json(course);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data = request.body;

    console.log(data);

    const updateCourse = container.resolve(UpdateCourseService);

    const course = await updateCourse.execute({
      id,
      name: data.name,
      image: data.image,
    });

    return response.json(course);
  }
}
