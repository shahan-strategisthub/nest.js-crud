import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './schemas/user.schemas';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}
  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async create(user: User): Promise<any> {
    const res = await this.userModel.create(user);
    return res;
  }

  async findById(id: string): Promise<User> {
    const userById = await this.userModel.findById(id);
    if (!userById) {
      throw new NotFoundException('User Not Found');
    }
    return userById;
  }

  async updateById(id: string, user: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, user, {
      new: true,
      runValidators: true,
    });
  }
  async deleteById(id: string): Promise<User> {
    const userById = await this.userModel.findByIdAndDelete(id);
    if (!userById) {
      throw new NotFoundException('User Not Found');
    }
    return userById;
  }
}
