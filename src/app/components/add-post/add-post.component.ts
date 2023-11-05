import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  constructor(
    private router: Router,
    private postService: PostService
  ) { }

  addPost(post: Post) {
    this.postService.createPost(post)
      .subscribe({
        next: () => {
          this.router.navigate(['/posts']);
        },
        error: (error) => {
          alert("Failed to create post");
          console.error(error);
        }
      });
  }
}
