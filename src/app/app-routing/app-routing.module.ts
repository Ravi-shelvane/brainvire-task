import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { PostsComponent } from '../posts/posts.component';
import { DetailsComponent } from '../details/details.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes:Routes = [
  {
    path:"",
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path:"users",
    component: UsersComponent
  },
  {
    path:"posts",
    component: PostsComponent
  },
  {
    path:"details",
    component: DetailsComponent
  },
  {
    path:"**",
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
