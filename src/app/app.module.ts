import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TemperatureConverterComponent } from './components/temperature-converter/temperature-converter.component';
import { FlightBookerComponent } from './components/flight-booker/component/flight-booker.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'temperature-converter', component: TemperatureConverterComponent },
  { path: 'flight-booker', component: FlightBookerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    MainComponent,
    TemperatureConverterComponent,
    FlightBookerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
