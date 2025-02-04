import { Injectable, OnModuleInit } from '@nestjs/common';
import { PeerServer } from 'peer';

@Injectable()
export class PeerService implements OnModuleInit {
  private peerServer: any;

  onModuleInit() {
    this.peerServer = PeerServer({ port: 3000, path: '/peerjs' });
    console.log('PeerJS server is running on port 3000');
  }
}