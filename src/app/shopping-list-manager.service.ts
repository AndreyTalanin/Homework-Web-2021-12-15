import { Injectable } from "@angular/core";
import { ShoppingListItem } from "./entities/shopping-list-item";

interface IShoppingListManagerService {
  getShoppingListItems(): ShoppingListItem[];
  addShoppingListItem(item: ShoppingListItem): void;
  editShoppingListItem(item: ShoppingListItem): void;
  removeShoppingListItem(item: ShoppingListItem): void;
}

@Injectable({
  providedIn: "root",
})
export class ShoppingListManagerService implements IShoppingListManagerService {
  constructor() {}

  getShoppingListItems(): ShoppingListItem[] {
    throw new Error("Method not implemented.");
  }

  addShoppingListItem(item: ShoppingListItem): void {
    throw new Error("Method not implemented.");
  }

  editShoppingListItem(item: ShoppingListItem): void {
    throw new Error("Method not implemented.");
  }

  removeShoppingListItem(item: ShoppingListItem): void {
    throw new Error("Method not implemented.");
  }
}
