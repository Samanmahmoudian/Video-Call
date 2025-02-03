import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { PeerServer } from 'peer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:'https://front-n04k.onrender.com'
  })
  const peerServer = PeerServer({host:'localhost',port:443, path:'/myapp'});
  await app.listen(3000);
}
bootstrap();
