import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NewsModule } from "./news/news.module";
import { MailModule } from "./mail/mail.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";
import { CategoriesModule } from "./categories/categories.module";
import { AuthModule } from "./auth/auth.module";
import { ProfileModule } from "./users/profile/profile.module";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { ConfigModule } from "@nestjs/config";
import { PgConfigService } from "./pgConfigService";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".development.env",
    }),
    TypeOrmModule.forRootAsync({
      useClass: PgConfigService,
      inject: [PgConfigService],
    }),
    NewsModule,
    MailModule,
    UsersModule,
    CategoriesModule,
    ProfileModule,
    AuthModule,
    EventEmitterModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public"),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
