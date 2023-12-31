import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { AboutComponent } from './components/about/about.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './shared/footer/footer.component';
import { PostCardComponent } from './shared/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    NotFoundComponent,
    PostFormComponent,
    AddPostComponent,
    EditPostComponent,
    AboutComponent,
    ContactMeComponent,
    HomepageComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
