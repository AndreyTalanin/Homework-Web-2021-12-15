import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecipeReagent } from "../entities/recipe-reagent";
import { RecipeBasedShoppingListItem } from "../entities/shopping-list-item";
import { RecipeRepositoryService } from "../recipe-repository.service";
import { ShoppingListManagerService } from "../shopping-list-manager.service";

interface RecipeReagentViewModel {
  id: number;
  name: string;
  externalDatabaseLink: string;
}

interface RecipeViewModel {
  id: number;
  title: string;
  description: string[];
  reagents: { reagent: RecipeReagentViewModel; quantity: number }[];
}

@Component({
  selector: "app-recipe-details-page",
  templateUrl: "./recipe-details-page.component.html",
  styleUrls: ["./recipe-details-page.component.css"],
})
export class RecipeDetailsPageComponent implements OnInit {
  recipe: RecipeViewModel;
  activatedRoute: ActivatedRoute;
  recipeRepositoryService: RecipeRepositoryService;
  shoppingListManagerService: ShoppingListManagerService;

  constructor(activatedRoute: ActivatedRoute, recipeRepositoryService: RecipeRepositoryService, shoppingListManagerService: ShoppingListManagerService) {
    this.activatedRoute = activatedRoute;
    this.recipeRepositoryService = recipeRepositoryService;
    this.shoppingListManagerService = shoppingListManagerService;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params["id"];
      const recipe = this.recipeRepositoryService.getRecipe(id);
      this.recipe = {
        ...recipe,
        reagents: recipe.reagents.map((recipeReagentInfo) => ({
          ...recipeReagentInfo,
          reagent: {
            ...recipeReagentInfo.reagent,
            externalDatabaseLink: recipeReagentInfo.reagent.getExternalDatabaseLink(),
          },
        })),
      };
    });
  }

  addRecipeToShoppingList(): void {
    for (const recipeReagentInfo of this.recipe.reagents) {
      this.shoppingListManagerService.addShoppingListItem(
        new RecipeBasedShoppingListItem(new RecipeReagent(recipeReagentInfo.reagent.id, recipeReagentInfo.reagent.name), recipeReagentInfo.quantity)
      );
    }
  }

  addRecipeReagentToShoppingList(recipeReagentId: number): void {
    const recipeReagentInfo = this.recipe.reagents.find((recipeReagentInfoToCompare) => recipeReagentInfoToCompare.reagent.id == recipeReagentId);
    this.shoppingListManagerService.addShoppingListItem(
      new RecipeBasedShoppingListItem(new RecipeReagent(recipeReagentInfo.reagent.id, recipeReagentInfo.reagent.name), recipeReagentInfo.quantity)
    );
  }
}
