import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class WeatherService {

  private url: string;
  private response; 
  constructor(private _http: Http) { }

  getData(searchValue ="pakistan")
  {
    this.url = "http://api.openweathermap.org/data/2.5/weather?q="+ searchValue +"&appid=e8f3a3a87cd6064649e142b3764540f7";
    this.response = this._http.get(this.url);
    return this.response;
  }

}
