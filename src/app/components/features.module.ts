import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { PageFeatureComponent } from './pages/page-feature/page-feature.component';
import { CounterComponent } from './features/counter/counter.component';
import { FeatureWrapperComponent } from './wrappers/feature-wrapper/feature-wrapper.component';
import { SolutionWrapperComponent } from './wrappers/solution-wrapper/solution-wrapper.component';
import { TemperatureConverterComponent } from './features/temperature-converter/temperature-converter.component';
import { FlightBookerComponent } from './features/flight-booker/flight-booker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule
  ],
  declarations: [
    PageFeatureComponent,
    FeatureWrapperComponent,
    SolutionWrapperComponent,
    CounterComponent,
    TemperatureConverterComponent,
    FlightBookerComponent
  ]
})
export class FeaturesModule {
}
