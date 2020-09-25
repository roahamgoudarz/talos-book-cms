import { Injectable } from '@nestjs/common';
import { BookEntity } from './book.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookService extends TypeOrmCrudService<BookEntity> {
  constructor(@InjectRepository(BookEntity) private repository: Repository<BookEntity>) {
    super(repository);
  }


  async create(book: BookEntity): Promise<BookEntity> {
    console.log("testtetete");
    return book;
    // return await this.repository.save(book);
  }

}
