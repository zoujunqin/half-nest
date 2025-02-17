import { Injectable } from '@nestjs/common';

@Injectable()
export class DeepSeekLocalService {
  getApi(): string {
    return 'This is a api path!';
  }
}
