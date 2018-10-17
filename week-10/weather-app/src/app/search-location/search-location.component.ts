import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})
export class SearchLocationComponent implements OnInit {

  public weatherData = [];

  constructor(
    private weatherDataService: WeatherDataService
  ) { }

  ngOnInit(
  ) {
  }
  
  searchWeather() {  
  this.weatherDataService.getWeather().subscribe(
    data => {this.weatherData.push(data)
    console.log(this.weatherData)}
    );
  }
}
