import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weathers',
  templateUrl: './weathers.component.html',
  styleUrls: ['./weathers.component.css']
})
export class WeathersComponent implements OnInit {
  weatherData;
  text;
  weatherDetails;
  constructor(private _weatherService: WeatherService) { 
  }

  ngOnInit() {
  }

  fetchData(searchValue)
  {
  
    this._weatherService.getData(searchValue.query)
     .subscribe(resWeatherData => {
       this.weatherData = resWeatherData
       if( this.weatherData['cod']== 200)
        {
          // console.log(this.weatherData);
          this.weatherDetails = {
            description: this.weatherData['weather'][0]['description'],
            humidity: this.weatherData['main']['humidity'],
            pressure: this.weatherData['main']['pressure'],
            temp: this.weatherData['main']['temp'],
            name:  this.weatherData['name']
          };
          // console.log(this.weatherDetails);
        }
      
    }
    
    )

  }

}
