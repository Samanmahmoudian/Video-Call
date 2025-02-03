import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class FileUploadController {
    @Get()
    upload(@Res() res:Response){
        res.sendFile('C:/Users/SAMAN/Desktop/dnh/public/index.html')
    }
    @Get('script.js')
    uploadjs(@Res() res:Response){
        res.sendFile('C:/Users/SAMAN/Desktop/dnh/public/script.js')
    }

}
