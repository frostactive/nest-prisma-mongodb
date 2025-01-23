import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async users(): Promise<User[]> {
    const allUsers = await this.prisma.user.findMany()
    return allUsers
  }
}
