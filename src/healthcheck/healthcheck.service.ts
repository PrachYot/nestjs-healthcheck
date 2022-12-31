import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class HealthcheckService {
  healthcheck() {
    return {
      status: HttpStatus.OK,
      message: 'OK',
    };
  }
}
