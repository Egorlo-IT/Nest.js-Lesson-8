import { JwtService } from "@nestjs/jwt";
import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { UsersEntity } from "../users/users.entity";
import { UsersService } from "../users/users.service";
import { AuthService } from "./auth.service";

describe("AuthTest", () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        UsersService,
        JwtService,
        {
          provide: getRepositoryToken(UsersEntity),
          useValue: {},
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it("AuthService should be defined", () => {
    expect(authService).toBeDefined();
  });
});
