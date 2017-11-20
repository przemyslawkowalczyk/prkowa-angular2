import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes-component/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail-component/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'form',
    component: FormComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
