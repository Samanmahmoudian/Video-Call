import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { PeerServer } from 'peer';
const cors = require('cors')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
app.enableCors()

  const peerServer = PeerServer({host:'localhost',port:443, path:'/'});
  await app.listen(3000);
}
bootstrap();
