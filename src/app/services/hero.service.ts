import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../models/hero.interface';
import { HEROES } from '../models/mock-heroes';
import { MassageService } from './massage.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private massageService: MassageService) {
  }
  getHeroes(): Observable<Hero[]> {
    this.massageService.add('HeroService: fetched heroes')
    return of(HEROES);
  }
  getHeroe(id: number): Observable<Hero> {
    this.massageService.add(`HeroesComponent: Selected hero id=${id}`)
    return of(HEROES.find(hero => hero.id === id) as Hero)
  }
}
