import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
    {
        path:'', component:HomeComponent,
        title:'Página Inicio'
    },
    {
        path:'post',
        component:PostsComponent,
        title:'Soy Post'
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }
];
