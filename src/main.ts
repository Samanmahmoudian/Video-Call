import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { ExpressPeerServer, PeerServer } from 'peer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const peerServer =  PeerServer({host:'localhost' , port:443 , path:'/myapp'})
await app.listen(3000);

}
bootstrap();
