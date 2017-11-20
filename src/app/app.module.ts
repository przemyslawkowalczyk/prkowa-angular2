import { InMemoryDataService } from './shared/in-memory-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
// import { InMemoryDataService } from '';

import { HeroService } from './heroes/shared/hero-service.service';
import { AppComponent } from './app.component';

import { HeroesComponent } from './heroes/heroes-component/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail-component/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';

import { RevertPipe } from './pipes/revert.pipe';
import { HighlightDirective } from './directives/highlight.directive';

const declarations: Array<any> = [
  AppComponent,
  HeroesComponent,
  HeroDetailComponent,
  DashboardComponent,
  RevertPipe,
  HighlightDirective
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
