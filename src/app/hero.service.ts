import { Injectable } from '@angular/core';
import { Hero } from './interfaces/hero';
import { HEROES } from './data/mock-heroes';
import { Observable, of } from 'rxjs';

// Injectable decorator -> allows Dependency Injection
@Injectable({
  providedIn: 'root', // -> available in whole app tree
})
export class HeroService {
  constructor() {} // HeroService is a Dependency to be injected

  // sync method
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // async method
  getHeroes(): Observable<Hero[]> {
    return of(HEROES); // mocks HttpClient.get<Hero[]>()
  }
}

/*
NOTE:
  - Services are Singletons
  - Angular DI has a hierarchical injection system
    e.g. Angular can inject HeroListComponent with both
    the HeroService provided in HeroComponent and
    the UserService provided in AppModule.
  - Designing a class with dependency injection makes the class easier to test.

  https://angular.io/guide/dependency-injection
*/
