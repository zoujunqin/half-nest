import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { env } from './config';

import { DeepSeekLocalModule } from './deepseek-local/local.module';
import { DeepSeekRemoteModule } from './deepseek-remote/remote.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(env!.DATABASE_CONFIG as TypeOrmModuleOptions),
    DeepSeekLocalModule,
    DeepSeekRemoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
