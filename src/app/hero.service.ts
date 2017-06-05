import  { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';

/* Có đoạn này thì mới sử dụng được dependency injection */
@Injectable()

export class HeroService {
  constructor(private http: Http) {}
  
  getHeroes() {
    return this.http.get('http://localhost:3000/heroes.json')
                    .toPromise()
                    .then(response => response.json())
                    .catch(this.handleError);
  }

  getHero(id: number) {
    return this.http.get('http://localhost:3000/hero-1.json')
                    .toPromise()
                    .then(response => response.json());
  }

  handleError() {

  }
}