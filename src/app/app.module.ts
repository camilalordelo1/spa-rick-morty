import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterComponent } from './pages/characters/character/character.component';
import { InformationComponent } from './components/information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharactersComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
