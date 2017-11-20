import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero-service.service';

import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [ HighlightDirective ]
})

export class HeroesComponent implements OnInit {
  title = 'app';
  heroes: Hero[];
  selectedHero: Hero;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor (private _heroService: HeroService,
               private _router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this._heroService.getHeroes()
      .then(res => this.heroes = res);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this._router.navigate(['/detail', this.selectedHero.id]);
  }
}
