import { Injectable, Req } from '@nestjs/common';
import data, { ResultSet } from './app.model';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSearch(query: string): ResultSet {
    const res = data.filter(element => element.title.includes(query));
    return res;
  }
}
