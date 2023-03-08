import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { UsersEntity } from "../users.entity";
import { UsersService } from "../users.service";
import { ProfileController } from "./profile.controller";

describe("ProfileTest", () => {
  let profileController: ProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(UsersEntity),
          useValue: {},
        },
      ],
      controllers: [ProfileController],
    }).compile();

    profileController = module.get<ProfileController>(ProfileController);
  });

  it("ProfileController should be defined", () => {
    expect(profileController).toBeDefined();
  });
});
