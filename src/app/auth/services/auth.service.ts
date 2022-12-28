import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioSubject: BehaviorSubject<User>;
  public usuario: Observable<User>;

  public get userData(): User {
    return this.usuarioSubject.value;
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.usuarioSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
    this.usuario = this.usuarioSubject.asObservable();
  }

  url = environment.baseUrl + '/users/';

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getById(idUser: number): Observable<User> {
    return this.http.get<User>(this.url + idUser);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.url + 'login', { email, password }, httpOptions).pipe(
      map(res => {
        if (res.success == true) {
          const user: User = res.data
          localStorage.setItem('user', JSON.stringify(user));
          this.usuarioSubject.next(user);
        }
        return res;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

}
