import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorComponent } from '../actor/actor.component';
import { ActorsService } from '../../services/actors.service';
import { Actor, ActorDetails } from '../../../types';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from '../films/films.component';

@Component({
  selector: 'app-actor-detail',
  standalone: true,
  imports: [ActorComponent, CommonModule, FilmsComponent],
  templateUrl: './actor-detail.component.html',
  styleUrl: './actor-detail.component.css'
})
export class ActorDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private actorService: ActorsService
  ) { }

  @Input() actorId!: string;
  actor: ActorDetails | undefined;
  loading = true;
  showFilms = false;

  fetchActorDetail(actorId: number) {
    this.actorService.getActorDetail('https://swapi.dev/api/people', actorId).subscribe((actor) => {
      this.actor = actor;
      this.loading = false;
    });

  }

  ngOnInit(): void {
    this.actorId = this.route.snapshot.params['actorId'];
    this.fetchActorDetail(+this.actorId);
  }
}
