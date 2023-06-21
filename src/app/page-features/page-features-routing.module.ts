import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterModule, Routes } from '@angular/router';
import { PageFeaturesComponent } from './page-features.component';
import { CounterComponent } from './components/guis/counter/counter.component';
import { TemperatureConverterComponent } from './components/guis/temperature-converter/temperature-converter.component';
import { FlightBookerComponent } from './components/guis/flight-booker/flight-booker.component';
import { FeatureData } from './models/feature-data.model';
import featureData from '../../assets/feature-data.json';
import implementationData from '../../assets/implementation-data.json';
import { of } from 'rxjs';
import { ImplementationData } from './models/implementation-data.model';
import { TimerComponent } from './components/guis/timer/timer.component';
import { CrudComponent } from './components/guis/crud/crud.component';
import { CircleDrawerComponent } from './components/guis/circle-drawer/circle-drawer.component';
import { CellsComponent } from './components/guis/cells/cells.component';

export const featureResolver: ResolveFn<FeatureData | undefined> = (route: ActivatedRouteSnapshot) => {
  const dataArr = featureData as FeatureData[];
  return of(dataArr.find(({ id }) => id === route.data['featureId']));
}
export const implementationResolver: ResolveFn<ImplementationData | undefined> = (route: ActivatedRouteSnapshot) => {
  const dataArr = implementationData as ImplementationData[];
  return of(dataArr.find(({ id }) => id === route.data['featureId']));
}

const routes: Routes = [
  {
    path: '',
    component: PageFeaturesComponent,
    children: [
      {
        path: 'counter',
        component: CounterComponent,
        resolve: {
          featureData: featureResolver,
          implementationData: implementationResolver
        },
        data: { featureId: 'counter' },
      },
      {
        path: 'temperature-converter',
        component: TemperatureConverterComponent,
        resolve: {
          featureData: featureResolver,
          implementationData: implementationResolver
        },
        data: { featureId: 'temperature-converter' },
      },
      {
        path: 'flight-booker',
        component: FlightBookerComponent,
        resolve: {
          featureData: featureResolver,
          implementationData: implementationResolver
        },
        data: { featureId: 'flight-booker' },
      },
      {
        path: 'timer',
        component: TimerComponent,
        resolve: {
          featureData: featureResolver,
          implementationData: implementationResolver
        },
        data: { featureId: 'timer' }
      },
      {
        path: 'crud',
        component: CrudComponent,
        resolve: {
          featureData: featureResolver,
          implementationData: implementationResolver
        },
        data: { featureId: 'crud' }
      },
      {
        path: 'circle-drawer',
        component: CircleDrawerComponent,
        resolve: {
          featureData: featureResolver,
          implementationData: implementationResolver
        },
        data: { featureId: 'circle-drawer' }
      },
      {
        path: 'cells',
        component: CellsComponent,
        resolve: {
          featureData: featureResolver,
          implementationData: implementationResolver
        },
        data: { featureId: 'cells' }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class PageFeaturesRoutingModule {
}
