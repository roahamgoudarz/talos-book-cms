import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { AuthenticateService } from './authenticate.service';
import { AuthenticateEntity } from './authenticate.entity';

@Crud({
  model: {
    type: AuthenticateEntity,
  },
})
@Controller('authenticate')
export class AuthenticateController {
  constructor(public service: AuthenticateService) { 
    console.log("test")
  }
}
