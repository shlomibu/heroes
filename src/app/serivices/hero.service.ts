import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.interface';
import { HEROES } from '../models/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() { }
  getHeroes(): Hero[] {
    return HEROES
  }
}
