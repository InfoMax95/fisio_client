import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {
  @Input()
  initialState: BehaviorSubject<Post> = new BehaviorSubject({});

  @Output()
  formValuesChanged = new EventEmitter<Post>();

  @Output()
  formSubmitted = new EventEmitter<Post>();

  postForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  get title() { return this.postForm.get('title')!; }
  get content() { return this.postForm.get('content')!; }
  get author() { return this.postForm.get('author')!; }

  ngOnInit() {
    this.initialState.subscribe(post => {
      this.postForm = this.fb.group({
        title: [ post.title, [Validators.required] ],
        content: [ post.content, [ Validators.required, Validators.minLength(5) ] ],
        author: [ post.author, [Validators.required] ]
      });
    });

    this.postForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
  }

  submitForm() {
    this.formSubmitted.emit(this.postForm.value);
  }
}
