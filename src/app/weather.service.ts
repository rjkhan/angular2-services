import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  private url: string;
  private response; 
  constructor(private _http: Http) { }

  getData(searchValue)
  {
    this.url = "http://api.openweathermap.org/data/2.5/weather?q="+ searchValue +"&appid=e8f3a3a87cd6064649e142b3764540f7";
    return this._http.get(this.url).map((response: Response) => response.json());
    
  }

}
