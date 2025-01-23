import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    const databaseUrl = process?.env?.DATABASE_URL
    const print = `The connection URL is ${databaseUrl}`
    console.error(print)
    await this.$connect();
  }
}
