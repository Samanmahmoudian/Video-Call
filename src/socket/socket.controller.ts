import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class SocketController {
    @Get()
    async sendFile(@Res() res:Response){
        res.sendFile('Front/index.html')
    }
}
