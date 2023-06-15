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
