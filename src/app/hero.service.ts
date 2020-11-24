import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './interfaces/hero';
import { HEROES } from './data/mock-heroes';
import { MessageService } from './message.service';

// Injectable decorator -> allows Dependency Injection
@Injectable({
  providedIn: 'root', // -> available in whole app tree
})
export class HeroService {
  // HeroService is a Dependency to be injected wherever it's needed
  constructor(
    // "service-in-service" scenario / MessageService in HeroService
    private messageService: MessageService
  ) {}

  // sync method
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // async method
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES); // FIXME: mocks HttpClient.get<Hero[]>()
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
