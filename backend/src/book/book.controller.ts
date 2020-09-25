import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { BookService } from './book.service';
import { BookEntity } from './book.entity';

@Crud({
  model: {
    type: BookEntity,
  },
})
@Controller('book')
export class BookController {
  constructor(public service: BookService) { }
}
