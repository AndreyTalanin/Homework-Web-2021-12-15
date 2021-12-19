import { TestBed } from "@angular/core/testing";

import { RecipeRepositoryService } from "./recipe-repository.service";

describe("RecipeRepositoryService", () => {
  let service: RecipeRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeRepositoryService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
