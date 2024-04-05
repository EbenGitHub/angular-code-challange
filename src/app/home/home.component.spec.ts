import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { PaginatorModule } from 'primeng/paginator';
import { CommonModule } from '@angular/common';
import { ActorComponent } from '../components/actor/actor.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, ActorComponent, CommonModule, PaginatorModule],
      providers: [HttpClient, HttpHandler]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
