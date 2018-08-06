import { Component, OnInit } from '@angular/core';

import { Tile } from '../tile';
import { TILES } from '../mock-weather-data';


@Component({
  selector: 'app-location-tiles',
  templateUrl: './location-tiles.component.html',
  styleUrls: ['./location-tiles.component.css']
})
export class LocationTilesComponent implements OnInit {

  tiles = TILES;

  constructor() { }

  ngOnInit() {
  }

}
