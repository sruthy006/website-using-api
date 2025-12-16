import { Routes } from '@angular/router';
import { Card } from './card/card';
import { Singlelistview } from './singlelistview/singlelistview';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'card', component: Card },
    { path: 'singlelist-view/:titleid', component: Singlelistview }
];
