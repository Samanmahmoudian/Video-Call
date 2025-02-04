import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class VideoGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('join')
  handleJoin(@MessageBody() id: string, client: Socket) {
    client.join(id);
    client.broadcast.to(id).emit('new-user', client.id);
  }

  @SubscribeMessage('signal')
  handleSignal(
    @MessageBody() data: { id: string; signal: any },
    client: Socket,
  ) {
    client.broadcast.to(data.id).emit('signal', {
      from: client.id,
      signal: data.signal,
    });
  }
}
