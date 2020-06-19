import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly url = 'http://localhost:3000/api'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  login(user: Users): Observable<Users> {
    return this.http.post<Users>(this.url, user).pipe(map((data: Users) => data))
  }

}
