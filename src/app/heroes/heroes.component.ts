import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../data/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  /* file vs. hardcoded */
  // template: '<b>hardcoded Template</b>',
  // styles: ['b { color:red; }'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES;
  selected: Hero; // show html *ngIf selected populated

  constructor() {}

  // hooks
  ngOnInit(): void {
    // initialization (of props) logic
  }

  // methods
  onSelect(hero: Hero): void {
    this.selected = hero;
  }
}
