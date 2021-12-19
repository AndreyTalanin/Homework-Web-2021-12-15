import { RecipeReagent } from "./recipe-reagent";

export const EXTERNAL_DATABASE_LINK_EMPTY = "no-external-database-link-available";

export interface ShoppingListItem {
  quantity: number;

  getName(): string;
  getExternalDatabaseLink(): string;
}

export class RecipeBasedShoppingListItem implements ShoppingListItem {
  reagent: RecipeReagent;
  quantity: number;

  constructor(reagent: RecipeReagent, quantity: number) {
    this.reagent = reagent;
    this.quantity = quantity;
  }

  getName(): string {
    return this.reagent.name;
  }
  getExternalDatabaseLink(): string {
    return this.reagent.getExternalDatabaseLink();
  }
}

export class ManuallyCreatedShoppingListItem implements ShoppingListItem {
  name: string;
  quantity: number;

  constructor(name: string, quantity: number) {
    this.name = name;
    this.quantity = quantity;
  }

  getName(): string {
    return this.name;
  }
  getExternalDatabaseLink(): string {
    return EXTERNAL_DATABASE_LINK_EMPTY;
  }
}
