import { Test, TestingModule } from "@nestjs/testing";
import { CommentsController } from "./comments.controller";
import { CommentsService } from "./comments.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { CommentsEntity } from "./comments.entity";
import { UsersService } from "../../users/users.service";
import { NewsService } from "../news.service";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { UsersEntity } from "../../users/users.entity";
import { NewsEntity } from "../news.entity";

describe("CommentsTest", () => {
  let commentsController: CommentsController;
  let commentsService: CommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentsService,
        UsersService,
        NewsService,
        EventEmitter2,
        {
          provide: getRepositoryToken(CommentsEntity),
          useValue: {},
        },
        {
          provide: getRepositoryToken(UsersEntity),
          useValue: {},
        },
        {
          provide: getRepositoryToken(NewsEntity),
          useValue: {},
        },
      ],
      controllers: [CommentsController],
    }).compile();

    commentsController = module.get<CommentsController>(CommentsController);
    commentsService = module.get<CommentsService>(CommentsService);
  });

  it("CommentsController should be defined", () => {
    expect(commentsController).toBeDefined();
  });

  it("CommentsService should be defined", () => {
    expect(commentsService).toBeDefined();
  });
});
