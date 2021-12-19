import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ShoppingListItem } from "./entities/shopping-list-item";

@Injectable({
  providedIn: "root",
})
export class ShoppingListManagerService {
  items: ShoppingListItem[] = [];
  eventStream: Subject<{}> = new Subject<{}>();

  constructor() {}

  mergeItems(): void {
    const newItems = new Map<string, ShoppingListItem>();
    for (const item of this.items) {
      const name = item.getName();
      if (newItems.has(name)) {
        const alreadyExistingItem = newItems.get(name);
        alreadyExistingItem.quantity += item.quantity;
      } else {
        newItems.set(name, item);
      }
    }

    this.items = [...newItems.values()];
  }

  getShoppingListItems(): ShoppingListItem[] {
    return this.items;
  }

  addShoppingListItem(item: ShoppingListItem): void {
    this.items = [...this.items, item];
    this.mergeItems();
    this.eventStream.next({});
  }

  editShoppingListItem(item: ShoppingListItem): void {
    this.items = [...this.items];
    this.eventStream.next({});
  }

  removeShoppingListItem(item: ShoppingListItem): void {
    this.items = this.items.filter((existingItem) => existingItem != item);
    this.eventStream.next({});
  }

  clearShoppingList(): void {
    this.items = [];
    this.eventStream.next({});
  }

  getObservable(): Observable<{}> {
    return this.eventStream;
  }
}
