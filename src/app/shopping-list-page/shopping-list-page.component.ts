import { Component, OnInit } from "@angular/core";
import { EXTERNAL_DATABASE_LINK_EMPTY, ManuallyCreatedShoppingListItem, ShoppingListItem } from "../entities/shopping-list-item";
import { ShoppingListManagerService } from "../shopping-list-manager.service";

interface ShoppingListItemViewModel {
  quantity: number;
  name: string;
  externalDatabaseLink?: string;
  originalItem: ShoppingListItem;
}

@Component({
  selector: "app-shopping-list-page",
  templateUrl: "./shopping-list-page.component.html",
  styleUrls: ["./shopping-list-page.component.css"],
})
export class ShoppingListPageComponent implements OnInit {
  items: ShoppingListItemViewModel[];
  shoppingListManagerService: ShoppingListManagerService;

  constructor(shoppingListManagerService: ShoppingListManagerService) {
    this.shoppingListManagerService = shoppingListManagerService;
  }

  ngOnInit(): void {
    const refreshShoppingList = () => {
      this.items = this.shoppingListManagerService.getShoppingListItems().map((shoppingListItem) => {
        const name = shoppingListItem.getName();
        let externalDatabaseLink = shoppingListItem.getExternalDatabaseLink();
        if (externalDatabaseLink == EXTERNAL_DATABASE_LINK_EMPTY) {
          externalDatabaseLink = null;
        }
        return {
          quantity: shoppingListItem.quantity,
          name: name,
          externalDatabaseLink: externalDatabaseLink,
          originalItem: shoppingListItem,
        };
      });
    };
    refreshShoppingList();
    this.shoppingListManagerService.getObservable().subscribe(({}) => refreshShoppingList());
  }

  validateName(nameString: string): [boolean, string] {
    nameString = nameString.trim();
    if (nameString.length == 0) {
      window.alert("Please, provide a non-empty name.");
      return [false, null];
    } else if (nameString.length > 1024) {
      window.alert("Please, provide a name that is shorter than 1024 characters.");
      return [false, null];
    }
    return [true, nameString];
  }

  validateQuantity(quantityString: string): [boolean, number] {
    const maxSafeIntegerStringLength = Number.MAX_SAFE_INTEGER;
    if (quantityString.length == 0) {
      window.alert("Please, provide a non-empty value.");
      return [false, null];
    } else if (quantityString.length > maxSafeIntegerStringLength) {
      window.alert(`Please, provide a value that is shorter than ${maxSafeIntegerStringLength} digits.`);
      return [false, null];
    }
    const quantity = parseInt(quantityString);
    if (quantity <= 0) {
      window.alert("Please, provide a positive value.");
      return [false, null];
    } else if (quantity > Number.MAX_SAFE_INTEGER) {
      window.alert(`Please, provide a value that is less than ${Number.MAX_SAFE_INTEGER}.`);
      return [false, null];
    }
    return [true, quantity];
  }

  addShoppingListItem(): void {
    const nameString = window.prompt("Please, enter item name:", "");
    const [isNameValid, name] = this.validateName(nameString);
    if (!isNameValid) {
      return;
    }

    const quantityString = window.prompt("Please, enter item quantity:", "1");
    const [isQuantityValid, quantity] = this.validateQuantity(quantityString);
    if (!isQuantityValid) {
      return;
    }

    this.shoppingListManagerService.addShoppingListItem(new ManuallyCreatedShoppingListItem(name, quantity));
  }

  changeShoppingListItemQuantity(item: ShoppingListItemViewModel): void {
    const quantityString = window.prompt("Please, enter new item quantity:", item.quantity.toString());
    const [isQuantityValid, quantity] = this.validateQuantity(quantityString);
    if (!isQuantityValid) {
      return;
    }

    item.originalItem.quantity = quantity;

    this.shoppingListManagerService.editShoppingListItem(item.originalItem);
  }

  removeShoppingListItem(item: ShoppingListItemViewModel): void {
    this.shoppingListManagerService.removeShoppingListItem(item.originalItem);
  }

  clearShoppingListItem(): void {
    this.shoppingListManagerService.clearShoppingList();
  }
}
