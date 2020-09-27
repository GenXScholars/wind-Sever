import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  message: JSON;
  getHello(): JSON {
    return this.message ;
  }
}
