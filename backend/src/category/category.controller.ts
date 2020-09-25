import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { CategoryService } from './category.service';
import { CategoryEntity } from './category.entity';

@Crud({
  model: {
    type: CategoryEntity,
  },
})
@Controller('category')
export class CategoryController {
  constructor(public service: CategoryService) { }
}
