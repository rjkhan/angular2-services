import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {

  constructor() { }

  getData()
  {
    return "data service method call";
  }

}
