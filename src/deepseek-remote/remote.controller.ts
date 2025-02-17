import {
  Body,
  Controller,
  HttpCode,
  Post,
  Sse,
  Response,
} from '@nestjs/common';
import { DeepSeekRemoteService } from './remote.service';
import { Observable } from 'rxjs';
import * as EventEmitter from 'events';

const eventEmitter = new EventEmitter();
const chatEventName = 'chatStream';

@Controller('deepseek')
export class DeepSeekRemoteController {
  constructor(private readonly deepSeekRemoteService: DeepSeekRemoteService) {}

  @Sse('linkSse')
  linkSse(): Observable<MessageEvent> {
    return new Observable((observer) => {
      eventEmitter.on(chatEventName, (data) => {
        observer.next(data);
      });
    });
  }

  @Post('getChatContent')
  @HttpCode(200)
  async getChatContent(@Body() body, @Response() response) {
    response.json();

    const stream: any = await this.deepSeekRemoteService.chat(body);

    for await (const chunk of stream) {
      eventEmitter.emit(chatEventName, `data:${JSON.stringify(chunk)}`);
    }
  }
}
