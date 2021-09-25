import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, SendPost } from 'src/app/core/models/user';
import { PostService } from '../../core/services/post.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {

  // Inject service
  constructor(private post: PostService) { }
  newPost: SendPost;
  postList: Observable<Post[]>;
  
    ngOnInit(): void {
      this.postList = this.post.userPosts();
    }

  receiveMessage($event){ 
    this.newPost =  $event;
    this.printIt(this.newPost); 
  }

  printIt(post: SendPost){
    // console.log("Console.log from parent component: " + this.newPost.content)
    this.post.newPost(post);
  }

}
