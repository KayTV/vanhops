import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { AboutComponent } from './components/about/about.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { RegistryComponent } from './components/registry/registry.component';
import { BridalComponent } from './components/bridal/bridal.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'instagram',
    component: InstagramComponent
  },
  {
    path: 'registry',
    component: RegistryComponent
  },
  {
    path: 'bridal',
    component: BridalComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [ ]
})
export class AppRoutingModule {}
