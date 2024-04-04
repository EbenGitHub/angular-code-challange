import { Component, Input } from '@angular/core';
import { Actor } from '../../../types';

@Component({
  selector: 'app-actor',
  standalone: true,
  imports: [],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.css'
})
export class ActorComponent {
  @Input() actor!: Actor;
}
