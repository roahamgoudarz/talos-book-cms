import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
import { AddressModule } from './address/address.module';
import { CategoryModule } from './category/category.module';
import { BookModule } from './book/book.module';
import { AuthModule } from './auth/auth.module';
import { NestCrawlerModule } from './crawler/crawler.module';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '*.{ts,js}')),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    CompanyModule,
    AddressModule,
    CategoryModule,
    BookModule,
    AuthModule,
    NestCrawlerModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule { }
