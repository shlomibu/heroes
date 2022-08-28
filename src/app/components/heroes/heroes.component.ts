import { HeroService } from './../../serivices/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes?: Hero[] = [];
  selectedHero?: Hero
  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes() {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero
  }

}
