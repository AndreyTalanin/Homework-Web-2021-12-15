import { Injectable } from "@angular/core";
import { Recipe } from "./entities/recipe";

interface IRecipeRepositoryService {
  getRecipeList(): Recipe[];
  getRecipe(id: number): Recipe;
}

@Injectable({
  providedIn: "root",
})
export class RecipeRepositoryService implements IRecipeRepositoryService {
  constructor() {}

  getRecipeList(): Recipe[] {
    throw new Error("Method not implemented.");
  }

  getRecipe(id: number): Recipe {
    throw new Error("Method not implemented.");
  }
}
