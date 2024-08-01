import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepo.create({
      name: createUserDto.name,
      surname: createUserDto.surname,
    });

    await this.userRepo.save(user);
    return user;
  }

  async getAllUsers() {
    return await this.userRepo.find();
  }

  async getUserById(id: string) {
    return await this.userRepo.findOne({
      where: {
        id,
      },
    });
  }

  async deleteUserById(id: string) {
    const user = await this.getUserById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.userRepo.remove(user);
    return 'User deleted successfully';
  }
}
