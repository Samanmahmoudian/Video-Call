import { Module } from '@nestjs/common';
import { PeerService } from './peer/peer.service';

@Module({
  providers: [PeerService],
})
export class AppModule {}