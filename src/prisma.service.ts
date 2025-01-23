import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    const print = `The connection URL is ${process?.env?.DATABASE_URL}`
    console.error(print)
    await this.$connect();
  }
}
