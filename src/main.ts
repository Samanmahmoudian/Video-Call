import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { PeerServer } from 'peer';
const cors = require('cors')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
app.enableCors()
  const server = app.getHttpServer();
  const peerServer = PeerServer({ port: 9000, path: '/peerjs' });
  app.use('/peerjs', express.static('public'));
  await app.listen(3000);
}
bootstrap();
