import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const databaseUrl = process ? process?.env?.DATABASE_URL : ''
    return `The connection URL is ${databaseUrl}`;
  }
}
