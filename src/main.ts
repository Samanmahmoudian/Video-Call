import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { ExpressPeerServer, PeerServer } from 'peer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });

const peerServer = PeerServer({host:'127.0.0.1' , path:'/peerjs'})
  await app.listen(3000);
}

bootstrap();
