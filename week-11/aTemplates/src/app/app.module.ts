import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwoTabComponent } from './two-tab/two-tab.component';
import { AirFighterComponent } from './air-fighter/air-fighter.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoTabComponent,
    AirFighterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
