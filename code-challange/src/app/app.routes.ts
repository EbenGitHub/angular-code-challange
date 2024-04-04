import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { ActorDetailComponent } from './components/actor-detail/actor-detail.component';

export const routes: Routes = [
    {
        title: 'Actors',
        path: '',
        component: HomeComponent
    },
    {
        title: 'Home',
        path: 'home',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        title: 'Actor Detail',
        path: 'actor/:actorId',
        component: ActorDetailComponent
    },
    {
        title: 'Page Not Found',
        path: '**',
        component: PageNotFoundComponent
    }
];
