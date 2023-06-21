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
import { TimerComponent } from './components/guis/timer/timer.component';
import { CrudComponent } from './components/guis/crud/crud.component';
import { CircleDrawerComponent } from './components/guis/circle-drawer/circle-drawer.component';
import { CellsComponent } from './components/guis/cells/cells.component';

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
    FlightBookerComponent,
    TimerComponent,
    CrudComponent,
    CircleDrawerComponent,
    CellsComponent
  ]
})
export class PageFeaturesModule {
}
