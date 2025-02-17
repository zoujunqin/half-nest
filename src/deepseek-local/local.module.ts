import { Module } from '@nestjs/common';
import { DeepSeekLocalController } from './local.controller';
import { DeepSeekLocalService } from './local.service';

@Module({
  imports: [],
  controllers: [DeepSeekLocalController],
  providers: [DeepSeekLocalService],
})
export class DeepSeekLocalModule {}
