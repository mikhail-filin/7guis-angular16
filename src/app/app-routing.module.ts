import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMainComponent } from './page-main/page-main.component';

const routes: Routes = [
  {
    path: '',
    component: PageMainComponent
  },
  {
    path: 'features',
    loadChildren: () => import('./page-features/page-features.module').then(m => m.PageFeaturesModule)
  },
  {
    path: '**',
    redirectTo: ''
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
