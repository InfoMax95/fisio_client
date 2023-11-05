import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent {
  posts$: Observable<Post[]> = new Observable();

  constructor(private postsService: PostService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  deletePost(id: string): void {
    this.postsService.deletePost(id).subscribe({
      next: () => this.fetchPosts()
    });
  }

  private fetchPosts(): void {
    this.posts$ = this.postsService.getPosts();
  }
}
