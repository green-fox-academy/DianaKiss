import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocationTilesComponent } from './location-tiles/location-tiles.component';
import { SearchLocationComponent } from './search-location/search-location.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationTilesComponent,
    SearchLocationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
