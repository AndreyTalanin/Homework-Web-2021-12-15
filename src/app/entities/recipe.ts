import { RecipeReagent } from "./recipe-reagent";

export class Recipe {
  id: number;
  title: string;
  description: string[];
  reagents: { reagent: RecipeReagent; quantity: number }[];

  constructor(id: number, title: string, description: string[], reagents: { reagent: RecipeReagent; quantity: number }[]) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.reagents = reagents;
  }

  getExternalDatabaseLink(): string {
    return `https://wotlkdb.com/?spell=${this.id}`;
  }
}
