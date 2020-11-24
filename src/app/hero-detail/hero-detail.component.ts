import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
/*
  The location is an Angular service for interacting with the browser.
  You'll use it later to navigate back to the view that navigated here.
*/

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  // async method
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // parsed

    // prettier-ignore
    this.heroService.getHero(id)
      .subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back(); // !dashboard != !heroes
  }
}
