import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true }) // Enable CORS for WebSocket connections
export class SignalingGateway {
  @WebSocketServer()
  server: Server;

  // Handle new connections
  handleConnection(@ConnectedSocket() client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  // Handle disconnections
  handleDisconnect(@ConnectedSocket() client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  // Handle 'offer' messages
  @SubscribeMessage('offer')
  handleOffer(@MessageBody() offer: any, @ConnectedSocket() client: Socket) {
    console.log('Received offer:', offer);
    client.broadcast.emit('offer', offer); // Broadcast the offer to other clients
  }

  // Handle 'answer' messages
  @SubscribeMessage('answer')
  handleAnswer(@MessageBody() answer: any, @ConnectedSocket() client: Socket) {
    console.log('Received answer:', answer);
    client.broadcast.emit('answer', answer); // Broadcast the answer to other clients
  }

  // Handle 'ice-candidate' messages
  @SubscribeMessage('ice-candidate')
  handleIceCandidate(@MessageBody() candidate: any, @ConnectedSocket() client: Socket) {
    console.log('Received ICE candidate:', candidate);
    client.broadcast.emit('ice-candidate', candidate); // Broadcast the ICE candidate to other clients
  }
}