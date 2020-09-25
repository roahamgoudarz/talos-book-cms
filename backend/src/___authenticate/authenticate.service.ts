import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';


// @Injectable()
// export class AddressService extends TypeOrmCrudService<AddressEntity> {
//   constructor(@InjectRepository(AddressEntity) repository: Repository<AddressEntity>) {
//     super(repository);
//   }
// }

@Injectable()
export class AuthenticateService {
  constructor(private readonly jwtService: JwtService) {}
}
