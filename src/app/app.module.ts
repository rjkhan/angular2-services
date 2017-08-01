import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //fom module manually added
import { AppComponent } from './app.component';
import { WeathersComponent } from './weathers/weathers.component';

@NgModule({
  declarations: [
    AppComponent,
    WeathersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule //fom module manually added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
