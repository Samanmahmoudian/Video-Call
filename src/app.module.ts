import { Module } from '@nestjs/common';


import { FileUploadController } from './file-upload/file-upload.controller';
import { FileUploadModule } from './file-upload/file-upload.module';


@Module({
  imports: [ FileUploadModule],
  providers: [],
  controllers: [FileUploadController],

})
export class AppModule {}
