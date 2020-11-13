import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'http://localhost:8000/user';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
      .pipe(
        tap(_ => this.log('fetched User')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }
  getUser(id: number): Observable<User> {
    const url = `${this.url}/${id}`;
    return this.http.get<User>(url)
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/register`, user, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`added User w/ id=${newUser.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }
  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted User id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }
  updateUser(user: User): Observable<any> {
    const urlupdate = `${this.url}/${user.id}`;
    return this.http.put(urlupdate, user, this.httpOptions).pipe(
      tap(_ => this.log(`updated User id=${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
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
