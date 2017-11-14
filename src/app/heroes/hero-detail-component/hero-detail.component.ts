import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero-service.service';
import { Hero } from '../hero';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor (private _heroService: HeroService,
               private _route: ActivatedRoute,
               private _location: Location) { }

  ngOnInit(): void {
    this.subscribeHereoes();
  }

  subscribeHereoes() {
    this._route.paramMap
      .switchMap((params: ParamMap) => this._heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this._location.back();
  }
}
