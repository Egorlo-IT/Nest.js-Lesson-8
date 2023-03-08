import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { UsersEntity } from "./users.entity";

describe("UsersTest", () => {
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(UsersEntity),
          useValue: {},
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  it("UsersService should be defined", () => {
    expect(usersService).toBeDefined();
  });
});
