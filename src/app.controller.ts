import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { ResultSet } from './app.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/search')
  getSearch(@Req() request: any): ResultSet {
    return this.appService.getSearch(request.query.query);
  }
}
