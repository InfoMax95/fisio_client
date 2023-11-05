import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'posts' },
  {path: 'posts', component: PostsListComponent },
  {path: 'posts/new', component: AddPostComponent },
  {path: 'posts/edit/:id', component: EditPostComponent },
  // {path: '', runGuardsAndResolvers: 'always', canActivate: [AuthGuard],
  //   children: [
  //     {path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard]},
  //     {path: 'add-post', component: AddPostComponent, canActivate: [AdminGuard]},
  //     {path: 'user-manager', component: UserManagerComponent, canActivate: [AdminGuard]},
  //   ]},
  // {path: 'apps', component: AppsComponent},
  // {path: 'contact', component: ContactComponent},
  // {path: 'about', component: AboutComponent},
  // {path: 'post/:id', component: PostComponent},
  // { path: 'login', component: LoginComponent},
  // { path: 'register', component: RegisterComponent},
  {
    path: '404',
    component: NotFoundComponent
  },
  // questo va sempre inserito come ultima path altrimenti rischiamo che prenda sempre questo
  {
    path: '**', // questo indica qualsiasi indirizzo diverso dai nostri
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
