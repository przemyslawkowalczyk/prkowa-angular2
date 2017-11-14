import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ENV } from './ENV.constants';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  constructor(private _http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this._http.get(ENV.heroApiUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${ENV.heroApiUrl}/${id}`;

    return this._http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHome(): Promise<any> {
    return this._http.get('http://localhost:5000/')
      .toPromise()
      .then(res => console.log(res));
  }

}
