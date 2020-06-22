import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Posts } from '../models/posts.models'
import { Users } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  readonly url = 'http://localhost:3000/posts'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  httpOption$ = {
    headers: new HttpHeaders({ 
      'Content-Type': 'multipart/form-data', 
      'Accept': 'application/json' 
    })
  }

  constructor(private http: HttpClient) { }

  listPosts(): Observable<Posts> {
    return this.http.get<Posts>(this.url).pipe(map((data: Posts) => data))
  }

  AddPost(dados): Observable<Users> {
    console.log(dados)
    return this.http.post<Users>(this.url, dados, this.httpOptions).pipe(map((data: Users) => data))
  }

  findPost(posts: Posts): Observable<Users> {
    let _url = `${this.url}/${posts.id}`
    return this.http.get<Users>(_url).pipe(map((data: Users) => data))
  }

  updatePost(posts: Posts): Observable<Users> {
    let _url = `${this.url}/${posts.id}`
    return this.http.put<Users>(_url, this.httpOptions).pipe(map((data: Users) => data))
  }

  deletPost(posts: Posts): Observable<Users> {
    let _url = `${this.url}/${posts.id}`
    return this.http.delete<Users>(_url, this.httpOptions).pipe(map((data: Users) => data))
  }
}
