import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/pages/main/main.component';
import { TemperatureConverterComponent } from './components/features/temperature-converter/temperature-converter.component';
import { FlightBookerComponent } from './components/features/flight-booker/flight-booker.component';
import { FeatureWrapperComponent } from './components/feature-wrapper/feature-wrapper.component';
import { CounterComponent } from './components/features/counter/counter.component';
import { PageCounterComponent } from './components/pages/page-counter/page-counter.component';
import { PageTemperatureComponent } from './components/pages/page-temperature/page-temperature.component';
import { PageFlightBookerComponent } from './components/pages/page-flight-booker/page-flight-booker.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    MainComponent,
    TemperatureConverterComponent,
    FlightBookerComponent,
    FeatureWrapperComponent,
    PageCounterComponent,
    PageTemperatureComponent,
    PageFlightBookerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
