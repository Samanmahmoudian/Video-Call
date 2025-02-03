import { MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class SocketGateway {
  @SubscribeMessage('message')
  async handlemessage(@MessageBody() message:any){
    console.log(message)
  }
}
