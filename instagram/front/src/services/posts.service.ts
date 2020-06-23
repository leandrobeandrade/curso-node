import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Posts } from '../models/posts.models'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  readonly url = 'http://localhost:3000/posts'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  listPosts(): Observable<Posts> {
    return this.http.get<Posts>(this.url).pipe(map((data: Posts) => data))
  }

  AddPost(dados): Observable<Posts> {
    const url = 'http://localhost:3000/post'
    return this.http.post<Posts>(url, dados).pipe(map((data: Posts) => data))
  }

  findPost(post: Posts): Observable<Posts> {
    const _url = `${this.url}/${post.id}`
    return this.http.get<Posts>(_url).pipe(map((data: Posts) => data))
  }

  updatePost(post: Posts): Observable<Posts> {
    const _url = `${this.url}/${post.id}`
    return this.http.put<Posts>(_url, this.httpOptions).pipe(map((data: Posts) => data))
  }

  deletePost(post: Posts): Observable<Posts> {
    const _url = `${this.url}/${post.id}/${post.url_imagem}`
    return this.http.delete<Posts>(_url, this.httpOptions).pipe(map((data: Posts) => data))
  }

}
