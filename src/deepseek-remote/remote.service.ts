import OpenAI from 'openai';
import { Injectable } from '@nestjs/common';
import { skApiKey } from 'src/config';
import { Stream } from 'openai/streaming';

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: skApiKey,
});

@Injectable()
export class DeepSeekRemoteService {
  async chat(body): Promise<Stream<OpenAI.Chat.Completions.ChatCompletion>> {
    const completion: any = await openai.chat.completions.create({
      messages: [{ role: 'system', content: body.prompt }],
      model: 'deepseek-chat',
      stream: true,
    });

    return completion;
  }
}
