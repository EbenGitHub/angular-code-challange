import { Component, Input } from '@angular/core';
import { Film } from '../../../types';
import { FilmsService } from '../../services/films.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent {
  constructor(
    private filmsService: FilmsService
  ) { }
  @Input() film_url!: string;

  film: Film | undefined;
  loading = true;

  ngOnInit(): void {
    this.filmsService.getFilm(this.film_url).subscribe((film) => {
      this.film = film;
      this.loading = false;
      console.log(this.film);
    }
    );
  }

}
