import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { CategoriesController } from "./categories.controller";
import { CategoriesEntity } from "./categories.entity";
import { CategoriesService } from "./categories.service";

describe("CategoriesTest", () => {
  let categoriesController: CategoriesController;
  let categoriesService: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: getRepositoryToken(CategoriesEntity),
          useValue: {},
        },
      ],
      controllers: [CategoriesController],
    }).compile();

    categoriesController =
      module.get<CategoriesController>(CategoriesController);
    categoriesService = module.get<CategoriesService>(CategoriesService);
  });

  it("CategoriesController should be defined", () => {
    expect(categoriesController).toBeDefined();
  });

  it("CategoriesService should be defined", () => {
    expect(categoriesService).toBeDefined();
  });
});
