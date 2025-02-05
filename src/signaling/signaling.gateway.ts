import { OnGatewayConnection, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server , Socket } from 'socket.io';

@WebSocketGateway({cors:{origin:'*'}})
export class SignalingGateway implements OnGatewayConnection {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    console.log('Client connected: ' + client.id);
  }

  handleOffer(client: Socket, data: { offer: RTCSessionDescriptionInit, targetTabId: string }) {
    const { offer, targetTabId } = data;
    // Emit offer to the target tab only
    this.server.to(targetTabId).emit('offer', { offer: offer, targetTabId: client.id });
  }

  handleAnswer(client: Socket, data: { answer: RTCSessionDescriptionInit, targetTabId: string }) {
    const { answer, targetTabId } = data;
    // Emit answer to the target tab only
    this.server.to(targetTabId).emit('answer', { answer: answer, targetTabId: client.id });
  }

  handleCandidate(client: Socket, data: { candidate: RTCIceCandidateInit, targetTabId: string }) {
    const { candidate, targetTabId } = data;
    // Emit ICE candidate to the target tab only
    this.server.to(targetTabId).emit('candidate', { candidate: candidate, targetTabId: client.id });
  }

  // Join a specific room (for a specific tab id)
  joinRoom(client: Socket, tabId: string) {
    client.join(tabId);
    console.log(`Client ${client.id} joined room ${tabId}`);
  }
}
