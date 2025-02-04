import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PeerServer , ExpressPeerServer } from 'peer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
const server = await app.getHttpServer()
  const peerServer = ExpressPeerServer(server);
  app.listen(3000)
}

bootstrap();