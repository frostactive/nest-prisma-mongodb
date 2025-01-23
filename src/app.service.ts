import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `The connection URL is ${process?.env?.DATABASE_URL}`;
  }
}
