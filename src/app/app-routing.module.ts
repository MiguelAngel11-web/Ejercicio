import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { PostComponent } from './posts/post/post.component';
import { SinglepostComponent } from './singlepost/singlepost.component'

const routes: Routes = [
  {path:'posts', component:PostComponent},
  {path:'users', component:UserComponent},
  {path:'perfil/:estado', component:UserComponent},
  {path:'singlepost/:id', component:SinglepostComponent},
  {path:'', redirectTo:'/posts', pathMatch:'full'},
  { path: '**', pathMatch: 'full', redirectTo: '/posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
