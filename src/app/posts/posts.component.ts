import { Component } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';
import { NgFor } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [TableModule,NgFor],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts:Post[]=[];
  constructor(
    private postService: PostService
  ){}

  ngOnInit(){
    this.listaPosts();
  }

  listaPosts(){
    this.postService.getPost().subscribe((data)=>{
      this.posts=data;
      console.log(this.posts);
    });
  }

}
