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

@NgModule({
  declarations: [
    AppComponent,
    DoggoImageComponent,
    DogSearchComponent,
    NavBarComponent,
    SavedDogosComponent,
    SavedDogoImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
