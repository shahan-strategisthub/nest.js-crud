import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schemas';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post()
  async createUsers(@Body() user: any): Promise<any> {
    return await this.userService.create(user);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.findById(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id')
    id: string,
    @Body()
    user: any,
  ): Promise<User> {
    return this.userService.updateById(id, user);
  }

  @Delete(':id')
  async DeleteUserById(@Param('id') id: string): Promise<User> {
    return this.userService.deleteById(id);
  }
}
