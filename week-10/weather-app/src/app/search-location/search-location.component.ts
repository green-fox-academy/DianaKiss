import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})
export class SearchLocationComponent implements OnInit {

  constructor(
    private weatherDataService: WeatherDataService,
  ) { }

  ngOnInit() {
    this.weatherDataService.getWeather().subscribe();
  }

}
