import { MailerService } from "@nestjs-modules/mailer";
import { Test, TestingModule } from "@nestjs/testing";
import { MailController } from "./mail.controller";
import { MailService } from "./mail.service";

describe("MailTest", () => {
  let module: TestingModule;
  let mailController: MailController;
  let mailService: MailService;
  let sendUserVerficationEmailMock;

  beforeEach(async () => {
    sendUserVerficationEmailMock = jest
      .fn()
      .mockImplementation(() => console.log("email sent"));
    module = await Test.createTestingModule({
      providers: [
        MailService,
        MailerService,
        {
          name: "MAILER_OPTIONS",
          provide: "MAILER_OPTIONS",
          useValue: [],
        },
      ],
      controllers: [MailController],
    })
      .overrideProvider(MailerService)
      .useValue({
        sendUserVerficationEmail: sendUserVerficationEmailMock,
      })
      .compile();

    mailController = module.get<MailController>(MailController);
    mailService = module.get<MailService>(MailService);
  });

  it("MailController should be defined", () => {
    expect(mailController).toBeDefined();
  });

  it("MailService should be defined", () => {
    expect(mailService).toBeDefined();
  });
});
