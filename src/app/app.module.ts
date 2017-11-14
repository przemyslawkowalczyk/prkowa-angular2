import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from './in-memory-data.service';

import { HeroService } from './hero-service.service';
import { AppComponent } from './app.component';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { RevertDirective } from './revert.directive';

const declarations: Array<any> = [
  AppComponent,
  HeroesComponent,
  HeroDetailComponent,
  DashboardComponent,
  RevertDirective
];

const imports: Array<any> = [
  BrowserModule,
  FormsModule,
  AppRoutingModule,
  HttpModule,
  InMemoryWebApiModule.forRoot(InMemoryDataService)
];

const providers: Array<any> = [
  HeroService
];

@NgModule({
  declarations: declarations,
  imports: imports,
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
