import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    UserModule,],
  controllers: [
    UserController,],
  providers: [],
})
export class AppModule { }
