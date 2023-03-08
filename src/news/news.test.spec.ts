import { Test, TestingModule } from "@nestjs/testing";
import { NewsController } from "./news.controller";
import { NewsEntity } from "./news.entity";
import { NewsService } from "./news.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { CommentsService } from "./comments/comments.service";
import { UsersService } from "../users/users.service";
import { CategoriesService } from "../categories/categories.service";
import { UsersEntity } from "../users/users.entity";
import { CommentsEntity } from "./comments/comments.entity";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { CategoriesEntity } from "../categories/categories.entity";
import { MailService } from "../mail/mail.service";
import { MailerService } from "@nestjs-modules/mailer";

describe("NewsTest", () => {
  let module: TestingModule;
  let newsController: NewsController;
  let newsService: NewsService;
  let sendUserVerficationEmailMock;

  beforeEach(async () => {
    sendUserVerficationEmailMock = jest
      .fn()
      .mockImplementation(() => console.log("email sent"));

    module = await Test.createTestingModule({
      providers: [
        NewsService,
        CommentsService,
        UsersService,
        EventEmitter2,
        CategoriesService,
        MailService,
        MailerService,
        {
          provide: getRepositoryToken(NewsEntity),
          useValue: {},
        },
        {
          provide: getRepositoryToken(CommentsEntity),
          useValue: {},
        },
        {
          provide: getRepositoryToken(UsersEntity),
          useValue: {},
        },
        {
          provide: getRepositoryToken(CategoriesEntity),
          useValue: {},
        },
        {
          name: "MAILER_OPTIONS",
          provide: "MAILER_OPTIONS",
          useValue: [],
        },
      ],
      controllers: [NewsController],
    })
      .overrideProvider(MailerService)
      .useValue({
        sendUserVerficationEmail: sendUserVerficationEmailMock,
      })
      .compile();

    newsController = module.get<NewsController>(NewsController);
    newsService = module.get<NewsService>(NewsService);
  });

  it("NewsController should be defined", () => {
    expect(newsController).toBeDefined();
  });

  it("NewsService should be defined", () => {
    expect(newsService).toBeDefined();
  });
});
