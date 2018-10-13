import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class WeatherDataService {
  
  private yahooService: string = 'https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
  
  constructor(
    private http: HttpClient,
  ) { }

  getWeather(): Observable<any> {
    
    return this.http.get(this.yahooService);
  }



}
