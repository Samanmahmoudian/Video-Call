import { MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway(9001)
export class SocketGateway {
  @SubscribeMessage('message')
  async handlemessage(@MessageBody() message:any){
    console.log(message)
  }
}
