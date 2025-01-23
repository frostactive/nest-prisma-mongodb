import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    let databaseUrl = ''
    try {
      databaseUrl = process?.env?.DATABASE_URL
    } catch (error) {}
    const print = `The connection URL is ${databaseUrl}`
    console.error(print)
    await this.$connect();
  }
}
