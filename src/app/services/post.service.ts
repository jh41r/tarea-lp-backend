import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl='http://localhost:3000/api/posts';

  constructor(private http: HttpClient) { }

  getPost():Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl);
  }
}
