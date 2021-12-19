import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { RecipeDetailsPageComponent } from "./recipe-details-page/recipe-details-page.component";

@NgModule({
  declarations: [AppComponent, HomePageComponent, RecipeDetailsPageComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
