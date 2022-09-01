import { MassageService } from 'src/app/services/massage.service';
import { HeroService } from '../../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes?: Hero[] = [];
  selectedHero?: Hero
  subscription?: Subscription;
  constructor(private heroService: HeroService, private massageService: MassageService) {
  }
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
