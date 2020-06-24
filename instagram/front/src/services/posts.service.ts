import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Posts } from '../models/posts.models'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  readonly url_posts = 'http://localhost:3000/posts'
  readonly url_post = 'http://localhost:3000/post'
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    })
  }

  constructor(private http: HttpClient) { }

  listPosts(): Observable<Posts> {
    return this.http.get<Posts>(this.url_posts).pipe(map((data: Posts) => data))
  }

  addPost(dados): Observable<Posts> {
    return this.http.post<Posts>(this.url_post, dados).pipe(map((data: Posts) => data))
  }

  findPost(post: Posts): Observable<Posts> {
    return this.http.get<Posts>(`${this.url_post}/${post.id}`).pipe(map((data: Posts) => data))
  }

  updatePost(post: Posts): Observable<Posts> {
    return this.http.put<Posts>(`${this.url_post}/${post.id}/${post.descricao}`, this.httpOptions).pipe(map((data: Posts) => data))
  }

  deletePost(post: Posts): Observable<Posts> {
    return this.http.delete<Posts>(`${this.url_post}/${post.id}/${post.url_imagem}`, this.httpOptions).pipe(map((data: Posts) => data))
  }

}
