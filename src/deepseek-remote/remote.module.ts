import { Module } from '@nestjs/common';
import { DeepSeekRemoteController } from './remote.controller';
import { DeepSeekRemoteService } from './remote.service';

@Module({
  imports: [],
  controllers: [DeepSeekRemoteController],
  providers: [DeepSeekRemoteService],
})
export class DeepSeekRemoteModule {}
