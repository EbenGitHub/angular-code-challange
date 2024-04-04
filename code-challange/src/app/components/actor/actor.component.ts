import { Component, Input } from '@angular/core';
import { Actor } from '../../../types';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-actor',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.css'
})
export class ActorComponent {
  constructor() { }
  @Input() actor!: Actor;

  get actorId() {
    return this.actor.url.split('/').filter(Boolean).pop();
  }
}
