import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute(data: ICreateUserDTO): Promise<User> {
    const existingUser = await this.usersRepository.findByEmail(data.email);

    if (existingUser) {
      throw new AppError('Email is already in use');
    }

    const hashedPassword = await this.hashProvider.generateHash(data.password);

    const user = await this.usersRepository.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
