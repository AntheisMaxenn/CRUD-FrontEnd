import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User, UserInfo, SendPost, Post } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  thisUser: User;

  constructor(private http: HttpClient, private auth: AuthService) {
  }
  
  
  // Make new post.
  newPost(post: SendPost){
    this.thisUser = this.auth.currentUser.value;
    post.id = this.thisUser.id;
    // console.log("Post Service post item: ")
    // console.log(post);
    this.http.post("https://simple-node-sql-auth.ts.r.appspot.com/post/new", post, {observe: 'response'}).pipe(map(data => {
      console.log(data.status)
        })).subscribe();
  }

  // Array of Post from a user.

  userPosts(): Observable<Post[]> {
    this.thisUser = this.auth.currentUser.value;
    const body = this.thisUser;
    return this.http.get<Post[]>("https://simple-node-sql-auth.ts.r.appspot.com/post/mypost").pipe();
  }


  // Array of public posts
  publicPosts(): Observable<Post[]> {
    this.thisUser = this.auth.currentUser.value;
    const body = this.thisUser;
    return this.http.get<Post[]>("https://simple-node-sql-auth.ts.r.appspot.com/post/feed").pipe();
  }

}

// map((data: any) => {
//   return data.results.map((entry: any) => ({
//     id: entry.id[0],
//     postID: entry.postID[0],
//     content: entry.content[0],
//   } as Post)
