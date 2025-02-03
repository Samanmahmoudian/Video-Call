import { Module } from '@nestjs/common';
import { SocketModule } from './socket/socket.module';


@Module({

  providers: [],

  imports: [SocketModule],


})
export class AppModule {}
