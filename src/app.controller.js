import { Controller, Dependencies, Get, Bind, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller()
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @ApiOperation({
    summary: 'Get Hello id.'
  })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Hello id'
  })
  @Get(':id')
  @Bind(Param('id'))
  getHelloId(id) {
    return `Hello ${id}`;
  }
}
