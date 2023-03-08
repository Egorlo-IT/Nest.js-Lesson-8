import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { CategoriesEntity } from "src/categories/categories.entity";
import { CommentsEntity } from "src/news/comments/comments.entity";
import { NewsEntity } from "src/news/news.entity";
import { UsersEntity } from "src/users/users.entity";

@Injectable()
export class PgConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.configService.get<any>("DATABASE_TYPE"),
      host: this.configService.get<string>("DATABASE_HOST"),
      port: this.configService.get<number>("DATABASE_PORT"),
      username: this.configService.get<string>("DATABASE_USERNAME"),
      password: this.configService.get<string>("DATABASE_PASSWORD"),
      database: this.configService.get<string>("DATABASE_NAME"),
      entities: [UsersEntity, NewsEntity, CommentsEntity, CategoriesEntity],
      synchronize: true,
    };
  }
}
