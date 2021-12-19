import { RecipeReagent } from "./recipe-reagent";

export interface Recipe {
  id: number;
  title: string;
  description: string[];
  reagents: { reagent: RecipeReagent; amount: number }[];
}
