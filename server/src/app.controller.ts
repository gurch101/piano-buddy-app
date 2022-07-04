import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/api/hello-world')
  login() {
    return { msg: 'hello world' };
  }
}
