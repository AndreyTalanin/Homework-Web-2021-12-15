import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { RecipeDetailsPageComponent } from "./recipe-details-page/recipe-details-page.component";
import { RecipeRepositoryService } from "./recipe-repository.service";
import { ShoppingListManagerService } from "./shopping-list-manager.service";
import { ShoppingListPageComponent } from "./shopping-list-page/shopping-list-page.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";

@NgModule({
  declarations: [AppComponent, HomePageComponent, RecipeDetailsPageComponent, ShoppingListPageComponent, SideMenuComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "home", component: HomePageComponent },
      { path: "recipe-details/:id", component: RecipeDetailsPageComponent },
      { path: "shopping-list", component: ShoppingListPageComponent },
      { path: "", redirectTo: "/home", pathMatch: "full" },
    ]),
  ],
  providers: [RecipeRepositoryService, ShoppingListManagerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
