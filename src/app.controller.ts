import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users();
  }
}
