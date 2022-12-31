import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('healthcheck')
export class HealthcheckController {
  @Get('/')
  @HttpCode(HttpStatus.OK)
  healthcheck() {
    return {
      status: HttpStatus.OK,
      message: 'OK',
    };
  }
}
