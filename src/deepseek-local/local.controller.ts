import { Controller, Get } from '@nestjs/common';
import { DeepSeekLocalService } from './local.service';

@Controller('deepseekLocal')
export class DeepSeekLocalController {
  constructor(private readonly deepSeekLocalService: DeepSeekLocalService) {}

  @Get('/getApi')
  getApi(): string {
    return this.deepSeekLocalService.getApi();
  }
}
