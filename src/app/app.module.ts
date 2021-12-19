import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { RecipeDetailsPageComponent } from "./recipe-details-page/recipe-details-page.component";
import { RecipeRepositoryService } from "./recipe-repository.service";
import { ShoppingListPageComponent } from "./shopping-list-page/shopping-list-page.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";

@NgModule({
  declarations: [AppComponent, HomePageComponent, RecipeDetailsPageComponent, ShoppingListPageComponent, SideMenuComponent],
  imports: [BrowserModule],
  providers: [RecipeRepositoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
