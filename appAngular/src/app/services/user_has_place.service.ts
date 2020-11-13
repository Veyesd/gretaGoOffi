import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserHasPlace } from '../interfaces/user_has_place';
import { environment } from '../../environments/environment';
const urlroot = environment.urlroot;
@Injectable({
  providedIn: 'root'
})
export class UserHasPlaceService {
  private url = urlroot + '/user_has_place';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }
  getUserHasPlaces(): Observable<UserHasPlace[]> {

    return this.http.get<UserHasPlace[]>(this.url)
      .pipe(
        tap(_ => this.log('fetched UserHasPlace')),
        catchError(this.handleError<UserHasPlace[]>('getUserHasPlace', []))
      );
  }
  getUserHasPlace(id: number): Observable<UserHasPlace> {
    const url = `${this.url}/${id}`;
    return this.http.get<UserHasPlace>(url).pipe(
      tap(_ => this.log(`fetched UserHasPlace id=${id}`)),
      catchError(this.handleError<UserHasPlace>(`getUserHasPlace id=${id}`))
    );
  }
  updateUserHasPlace(UserHasPlace: UserHasPlace): Observable<any> {

    return this.http.put(this.url, UserHasPlace, this.httpOptions).pipe(
      tap(_ => this.log(`updated UserHasPlace id=${UserHasPlace.user_id}`)),
      catchError(this.handleError<any>('updateUserHasPlace'))
    );
  }
  addUserHasPlace(UserHasPlace: UserHasPlace): Observable<UserHasPlace> {
    return this.http.post<UserHasPlace>(`${this.url}/register`, UserHasPlace, this.httpOptions).pipe(
      tap((newUserHasPlace: UserHasPlace) => this.log(`added UserHasPlace w/ id=${newUserHasPlace.user_id}`)),
      catchError(this.handleError<UserHasPlace>('addUserHasPlace'))
    );
  }
  deleteUserHasPlace(UserHasPlace: UserHasPlace | number): Observable<UserHasPlace> {
    const id = typeof UserHasPlace === 'number' ? UserHasPlace : UserHasPlace.user_id;
    const url = `${this.url}/${id}`;

    return this.http.delete<UserHasPlace>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted UserHasPlace id=${id}`)),
      catchError(this.handleError<UserHasPlace>('deleteUserHasPlace'))
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
