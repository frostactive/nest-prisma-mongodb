import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async users() {
    const allUsers = await this.prisma.user.findMany()
    return allUsers
  }
}
