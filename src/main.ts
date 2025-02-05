import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PeerServer , ExpressPeerServer } from 'peer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.listen(3000)
}

bootstrap();