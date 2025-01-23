import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let databaseUrl = ''
    try {
      databaseUrl = process?.env?.DATABASE_URL
    } catch (error) {}
    return `The connection URL is ${databaseUrl}`;
  }
}
