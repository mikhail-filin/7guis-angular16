import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/pages/main/main.component';
import { PageCounterComponent } from './components/pages/page-counter/page-counter.component';
import { PageTemperatureComponent } from './components/pages/page-temperature/page-temperature.component';
import { PageFlightBookerComponent } from './components/pages/page-flight-booker/page-flight-booker.component';
import { FeatureData } from './models/feature-data.model';
import data from '../assets/data.json';
import { of } from 'rxjs';

export const featureResolver: ResolveFn<FeatureData | undefined> = (route: ActivatedRouteSnapshot) => {
  const dataArr = data as FeatureData[];
  return of(dataArr.find(({ id }) => id === route.data['featureId']));
}

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'counter',
    component: PageCounterComponent,
    resolve: { featureData: featureResolver },
    data: { featureId: 'counter' }
  },
  {
    path: 'temperature-converter',
    component: PageTemperatureComponent,
    resolve: { featureData: featureResolver },
    data: { featureId: 'temperature-converter' }
  },
  {
    path: 'flight-booker',
    component: PageFlightBookerComponent,
    resolve: { featureData: featureResolver },
    data: { featureId: 'flight-booker' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
