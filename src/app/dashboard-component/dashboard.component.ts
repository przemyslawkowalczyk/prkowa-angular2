import { Component, OnInit } from '@angular/core';

import { Hero } from '../heroes/shared/hero';
import { HeroService } from '../heroes/shared/hero-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor( private _heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.getHome();
  }

  getHeroes() {
    this._heroService.getHeroes()
      .then(res => this.heroes = res.slice(1, 5));
  }

  getHome() {
    this._heroService.getHome()
      .then(res => console.log(res));
  }

}
