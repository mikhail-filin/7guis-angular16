import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMainComponent } from './components/pages/page-main/page-main.component';

const routes: Routes = [
  {
    path: '',
    component: PageMainComponent
  },
  {
    path: 'features',
    loadChildren: () => import('./components/features.module').then(m => m.FeaturesModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
