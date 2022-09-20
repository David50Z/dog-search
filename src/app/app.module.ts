import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'



import { AppComponent } from './app.component';
import { DoggoImageComponent } from './doggo-image/doggo-image.component';
import { DogSearchComponent } from './dog-search/dog-search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SavedDogosComponent } from './saved-dogos/saved-dogos.component';
import { SavedDogoImageComponent } from './saved-dogo-image/saved-dogo-image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchMultipleDogosComponent } from './search-multiple-dogos/search-multiple-dogos.component';
import { MatchingBreedsComponent } from './matching-breeds/matching-breeds.component';
import { FullImageComponent } from './full-image/full-image.component';
import { DescriptionComponent } from './description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    DoggoImageComponent,
    DogSearchComponent,
    NavBarComponent,
    SavedDogosComponent,
    SavedDogoImageComponent,
    SearchMultipleDogosComponent,
    MatchingBreedsComponent,
    FullImageComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
