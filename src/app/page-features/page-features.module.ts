import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageFeaturesRoutingModule } from './page-features-routing.module';
import { PageFeaturesComponent } from './page-features.component';
import { CounterComponent } from './components/guis/counter/counter.component';
import { FeatureWrapperComponent } from './components/wrappers/feature-wrapper/feature-wrapper.component';
import { SolutionWrapperComponent } from './components/wrappers/solution-wrapper/solution-wrapper.component';
import { TemperatureConverterComponent } from './components/guis/temperature-converter/temperature-converter.component';
import { FlightBookerComponent } from './components/guis/flight-booker/flight-booker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PageFeaturesRoutingModule,
    FormsModule
  ],
  declarations: [
    PageFeaturesComponent,
    FeatureWrapperComponent,
    SolutionWrapperComponent,
    CounterComponent,
    TemperatureConverterComponent,
    FlightBookerComponent
  ]
})
export class PageFeaturesModule {
}
