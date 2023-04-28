import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userApiUrl = 'https://localhost:7037/api/User';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(error.error.message);
    } else {
      console.log(error.status);
    }
    return throwError(
      console.log('Something has happened; Api is not working!'));
  }

  async getAllUsers(): Promise<Observable<any>> {
    return this.http.get<any>(`${this.userApiUrl}/GetAllUsers`)
      .pipe(catchError(this.handleError));
  }

  async saveUser(postUser: any): Promise<Observable<any>> {
    return this.http.post<any>(`${this.userApiUrl}/SaveUser`, postUser)
      .pipe(catchError(this.handleError));
  }


  // Start State Api
  async GetAllStateData(): Promise<Observable<any>> {
    return this.http.get<any>(`${this.userApiUrl}/GetAllStates`)
      .pipe(catchError(this.handleError));
  }
  // End State service
}
