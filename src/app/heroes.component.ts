import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './templates/heroes.component.html',
  
  styleUrls: ['./styles/heroes.component.css']
})


export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;  

  constructor(private heroService: HeroService, private router: Router) {

  }

  ngOnInit(): void {    
    this.getHeroes();  
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes() : void {
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes    
    });
  }

  goDetail(hero: Hero) {
    this.router.navigate(['/detail', hero.id]);
  }
}
