import { Injectable } from "@angular/core";
import { Recipe } from "./entities/recipe";
import { RecipeReagent } from "./entities/recipe-reagent";

const recipes: Recipe[] = [
  new Recipe(
    57423,
    "Fish Feast",
    [
      "Set out a great feast that will feed your party!",
      "Restores 22500 health and 19200 mana over 30 sec.",
      "If you spend at least 10 seconds eating you will become well fed and gain 80 Attack Power, 46 Spell Power and 40 Stamina for 1 hr.",
    ],
    [
      { reagent: new RecipeReagent(43007, "Northern Spices"), quantity: 1 },
      { reagent: new RecipeReagent(41806, "Musselback Sculpin"), quantity: 2 },
      { reagent: new RecipeReagent(41809, "Glacial Salmon"), quantity: 2 },
      { reagent: new RecipeReagent(41813, "Nettlefish"), quantity: 2 },
    ]
  ),
  new Recipe(
    58527,
    "Gigantic Feast",
    [
      "Set out a great feast that will feed your party!",
      "Restores 22500 health and 19200 mana over 30 sec.",
      "If you spend at least 10 seconds eating you will become larger!",
    ],
    [
      { reagent: new RecipeReagent(43007, "Northern Spices"), quantity: 1 },
      { reagent: new RecipeReagent(34736, "Chunk o' Mammoth"), quantity: 2 },
      { reagent: new RecipeReagent(41800, "Deep Sea Monsterbelly"), quantity: 2 },
      { reagent: new RecipeReagent(41803, "Rockfin Grouper"), quantity: 2 },
    ]
  ),
  new Recipe(
    58528,
    "Small Feast",
    [
      "Set out a great feast that will feed your party!",
      "Restores 22500 health and 19200 mana over 30 sec.",
      "If you spend at least 10 seconds eating you will become smaller.",
    ],
    [
      { reagent: new RecipeReagent(43007, "Northern Spices"), quantity: 1 },
      { reagent: new RecipeReagent(41809, "Glacial Salmon"), quantity: 2 },
      { reagent: new RecipeReagent(41813, "Nettlefish"), quantity: 2 },
      { reagent: new RecipeReagent(43012, "Rhino Meat"), quantity: 2 },
    ]
  ),
  new Recipe(
    57441,
    "Blackened Dragonfin",
    [
      "Restores 22500 health and 19200 mana over 30 sec.",
      "If you spend at least 10 seconds eating you will become well fed and gain 40 Agility and 40 Stamina for 1 hr.",
    ],
    [
      { reagent: new RecipeReagent(43007, "Northern Spices"), quantity: 1 },
      { reagent: new RecipeReagent(41807, "Dragonfin Angelfish"), quantity: 1 },
    ]
  ),
  new Recipe(
    57442,
    "Dragonfin Filet",
    [
      "Restores 22500 health and 19200 mana over 30 sec.",
      "If you spend at least 10 seconds eating you will become well fed and gain 40 Strength and 40 Stamina for 1 hr.",
    ],
    [
      { reagent: new RecipeReagent(43007, "Northern Spices"), quantity: 1 },
      { reagent: new RecipeReagent(41807, "Dragonfin Angelfish"), quantity: 1 },
    ]
  ),
  new Recipe(
    45568,
    "Firecracker Salmon",
    [
      "Restores 22500 health and 19200 mana over 30 sec.",
      "If you spend at least 10 seconds eating you will become well fed and gain 46 Spell Power and 40 Stamina for 1 hr.",
    ],
    [
      { reagent: new RecipeReagent(43007, "Northern Spices"), quantity: 1 },
      { reagent: new RecipeReagent(41809, "Glacial Salmon"), quantity: 1 },
    ]
  ),
];

@Injectable({
  providedIn: "root",
})
export class RecipeRepositoryService {
  constructor() {}

  getRecipeList(): Recipe[] {
    return recipes;
  }

  getRecipe(id: number): Recipe {
    return recipes.find((recipe) => recipe.id == id);
  }
}
