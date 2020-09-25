import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticateService } from './authenticate.service';
import { AuthenticateController } from './authenticate.controller';


@Module({
  imports: [JwtModule.register({ secret: 'hard!to-guess_secret' })],
  providers: [AuthenticateService],
  controllers: [AuthenticateController],
})

export class AuthenticateModule {}
