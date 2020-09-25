import { Injectable } from '@nestjs/common';
import { CategoryEntity } from './category.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService extends TypeOrmCrudService<CategoryEntity> {
  constructor(@InjectRepository(CategoryEntity) repository: Repository<CategoryEntity>) {
    super(repository);
  }
}
