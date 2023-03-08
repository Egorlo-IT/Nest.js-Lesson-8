import { JwtService } from "@nestjs/jwt";
import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthService } from "./auth/auth.service";
import { UsersService } from "./users/users.service";
import { UsersEntity } from "./users/users.entity";
import { getRepositoryToken } from "@nestjs/typeorm";

describe("AppTest", () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        AuthService,
        JwtService,
        UsersService,
        {
          provide: getRepositoryToken(UsersEntity),
          useValue: {},
        },
      ],
      controllers: [AppController],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  it("AppController should be defined", () => {
    expect(appController).toBeDefined();
  });

  it("AppService should be defined", () => {
    expect(appService).toBeDefined();
  });
});
