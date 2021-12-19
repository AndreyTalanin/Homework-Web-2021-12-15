import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { RecipeDetailsPageComponent } from "./recipe-details-page/recipe-details-page.component";
import { ShoppingListPageComponent } from "./shopping-list-page/shopping-list-page.component";

@NgModule({
  declarations: [AppComponent, HomePageComponent, RecipeDetailsPageComponent, ShoppingListPageComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
