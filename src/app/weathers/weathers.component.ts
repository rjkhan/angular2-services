import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weathers',
  templateUrl: './weathers.component.html',
  styleUrls: ['./weathers.component.css']
})
export class WeathersComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { 
    console.log(this._weatherService.getData());
  }

  ngOnInit() {
  }

}
