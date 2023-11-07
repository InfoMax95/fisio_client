import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent {
  post: BehaviorSubject<Post> = new BehaviorSubject({});

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      alert('No id provided');
    }

    this.postService.getPost(id!).subscribe((post) => {
      this.post.next(post);
    });
  }

  editPost(post: Post) {
    this.postService.updatePost(this.post.value._id || '', post)
      .subscribe({
        next: () => {
          this.router.navigate(['/posts']);
        },
        error: (error) => {
          alert('Failed to update post');
          console.error(error);
        }
      })
  }
}
