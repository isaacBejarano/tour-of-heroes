import { Component, OnInit, Optional } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  /* file vs. hardcoded */
  // template: '<b>hardcoded Template</b>',
  // styles: ['b { color:red; }'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selected: Hero; // show html *ngIf selected populated

  constructor(
    /* NOTE:
        While you could call getHeroes() in the constructor,
        that's not the best practice.
        Reserve the constructor for simple initialization
        such as wiring constructor parameters to properties.
        The constructor shouldn't do anything.
        It certainly shouldn't call a function that makes HTTP
        requests to a remote server as a real data service would.
    */
    @Optional() private heroService?: HeroService
  ) {}

  // hooks
  ngOnInit(): void {
    // initialization (of props) logic
    this.getHeroes();
  }

  // methods
  onSelect(hero: Hero): void {
    this.selected = hero;
  }

  getHeroes(): void {
    /* NOTE:
        The HeroesComponent consumes the getHeroes() result
        as if heroes could be fetched synchronously.
        This will not work in a real app...
        fetching heroes from a remote server,
        which is an inherently asynchronous operation.
        HeroService.getHeroes() should return an Observable
        because it will eventually use the Angular HttpClient.
    */

    // prettier-ignore
    this.heroService.getHeroes() // : Observable<Hero[]>
      .subscribe(heroes => this.heroes = heroes); // ...when fetched
  }
}
