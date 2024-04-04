import { Component } from '@angular/core';
import { ActorsService } from '../services/actors.service';
import { ActorComponent } from '../components/actor/actor.component';
import { Actor } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ActorComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private actorService: ActorsService
  ) { }

  actors: Actor[] = [];

  ngOnInit() {
    this.actorService.getActors('https://swapi.dev/api/people', { page: 1 }).subscribe((actors) => {
      this.actors = actors.results;
    });
  }
}
