import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({cors:{origin:'*'}})
export class SignalingGateway {
  @WebSocketServer() server: Server;

  @SubscribeMessage('offer')
  handleOffer(@MessageBody() offer, @ConnectedSocket() client: Socket) {
    // Relay the offer to the other client
    client.broadcast.emit('offer', offer); // broadcasting to all other clients except the sender
  }

  @SubscribeMessage('answer')
  handleAnswer(@MessageBody() answer: any,@ConnectedSocket() client: Socket) {
    // Relay the answer to the other client
    client.broadcast.emit('answer', answer); // broadcasting to all other clients except the sender
  }

  @SubscribeMessage('candidate')
  handleCandidate(@MessageBody() candidate: any, @ConnectedSocket() client: Socket) {
    // Relay the ICE candidate to the other client
    client.broadcast.emit('candidate', candidate); // broadcasting to all other clients except the sender
  }
}
