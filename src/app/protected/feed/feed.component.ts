import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/models/user';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor(private post: PostService) { }

  postList: Observable<Post[]>;

  ngOnInit(): void {
    this.postList = this.post.publicPosts();
  }

}
