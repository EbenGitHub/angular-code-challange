import { Component } from '@angular/core';
import { ActorsService } from '../services/actors.service';
import { ActorComponent } from '../components/actor/actor.component';
import { Actor } from '../../types';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ActorComponent, CommonModule, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private actorService: ActorsService
  ) { }

  actors: Actor[] = [];
  totalRecords = 0;
  loading = true;

  onPageChange(event: any) {
    this.fetchActors(event.page + 1);
    this.loading = true;
  }

  fetchActors(page: number) {
    this.actorService.getActors('https://swapi.dev/api/people', { page }).subscribe((actors) => {
      this.actors = actors.results;
      this.totalRecords = actors.count;
      this.loading = false;
    });

  }

  ngOnInit() {
    this.fetchActors(1);
  }
}
