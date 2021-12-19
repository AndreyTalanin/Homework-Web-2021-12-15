import { Component, OnInit } from "@angular/core";
import { RecipeRepositoryService } from "../recipe-repository.service";

interface RecipeViewModel {
  id: number;
  title: string;
  externalDatabaseLink: string;
}

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.css"],
})
export class SideMenuComponent implements OnInit {
  recipeList: RecipeViewModel[];
  recipeRepositoryService: RecipeRepositoryService;

  constructor(recipeRepositoryService: RecipeRepositoryService) {
    this.recipeRepositoryService = recipeRepositoryService;
  }

  ngOnInit(): void {
    this.recipeList = this.recipeRepositoryService
      .getRecipeList()
      .map((recipe) => ({ id: recipe.id, title: recipe.title, externalDatabaseLink: recipe.getExternalDatabaseLink() }));
  }
}
