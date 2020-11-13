import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserHasLift } from '../interfaces/user_has_lift';
import { environment } from '../../environments/environment';
const urlroot = environment.urlroot;
@Injectable({
  providedIn: 'root'
})
export class UserHasLiftService {
  private url = urlroot + '/user_has_lift';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }
  getUserHasLifts(): Observable<UserHasLift[]> {

    return this.http.get<UserHasLift[]>(this.url)
      .pipe(
        tap(_ => this.log('fetched UserHasLift')),
        catchError(this.handleError<UserHasLift[]>('getUserHasLift', []))
      );
  }
  getUserHasLift(id: number): Observable<UserHasLift> {
    const url = `${this.url}/${id}`;
    return this.http.get<UserHasLift>(url).pipe(
      tap(_ => this.log(`fetched UserHasLift id=${id}`)),
      catchError(this.handleError<UserHasLift>(`getUserHasLift id=${id}`))
    );
  }
  updateUserHasLift(UserHasLift: UserHasLift): Observable<any> {
    const urlupdate = `${this.url}/${UserHasLift.id}`;
    return this.http.put(urlupdate, UserHasLift, this.httpOptions).pipe(
      tap(_ => this.log(`updated UserHasLift id=${UserHasLift.id}`)),
      catchError(this.handleError<any>('updateUserHasLift'))
    );
  }
  addUserHasLift(UserHasLift: UserHasLift): Observable<UserHasLift> {
    return this.http.post<UserHasLift>(`${this.url}/register`, UserHasLift, this.httpOptions).pipe(
      tap((newUserHasLift: UserHasLift) => this.log(`added UserHasLift w/ id=${newUserHasLift.id}`)),
      catchError(this.handleError<UserHasLift>('addUserHasLift'))
    );
  }
  deleteUserHasLift(UserHasLift: UserHasLift | number): Observable<UserHasLift> {
    const id = typeof UserHasLift === 'number' ? UserHasLift : UserHasLift.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<UserHasLift>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted UserHasLift id=${id}`)),
      catchError(this.handleError<UserHasLift>('deleteUserHasLift'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(message);
  }
}
