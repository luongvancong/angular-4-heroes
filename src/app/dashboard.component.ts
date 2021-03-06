import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './templates/dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];
  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => {
      console.log(heroes);
      this.heroes = heroes.slice(1,5);
    }) 
  }
}