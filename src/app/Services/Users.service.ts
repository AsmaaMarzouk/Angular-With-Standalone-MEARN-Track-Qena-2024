import { Injectable } from '@angular/core';
import { Iuser } from '../Models/iuser';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url: string = `${environment.baseUrl}/Users`;

  httpHeader = {};
  constructor(private httpclient: HttpClient) {
    this.httpHeader = {
      Headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  signUp(newUser: Iuser): Observable<Iuser> {
    return this.httpclient.post<Iuser>(this.url, newUser, this.httpHeader)
    // .pipe(
    //   retry(3),
    //   catchError((error: any) => {
    //     return throwError(() => {
    //       return new Error('Error signing up');
    //     });
    //   })
    // );
  }
}
