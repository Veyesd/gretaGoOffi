import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Lift } from '../interfaces/lift';
import { environment } from '../../environments/environment';
const urlroot = environment.urlroot;
@Injectable({
  providedIn: 'root'
})
export class LiftService {
  private url = urlroot + '/lift';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }
  getLifts(): Observable<Lift[]> {

    return this.http.get<Lift[]>(this.url)
      .pipe(
        tap(_ => this.log('fetched Lift')),
        catchError(this.handleError<Lift[]>('getLift', []))
      );
  }
  getLift(id: number): Observable<Lift> {
    const url = `${this.url}/${id}`;
    return this.http.get<Lift>(url).pipe(
      tap(_ => this.log(`fetched Lift id=${id}`)),
      catchError(this.handleError<Lift>(`getLift id=${id}`))
    );
  }
  updateLift(Lift: Lift): Observable<any> {
    const urlupdate = `${this.url}/${Lift.id}`;
    return this.http.put(urlupdate, Lift, this.httpOptions).pipe(
      tap(_ => this.log(`updated Lift id=${Lift.id}`)),
      catchError(this.handleError<any>('updateLift'))
    );
  }
  addLift(Lift: Lift): Observable<Lift> {
    return this.http.post<Lift>(`${this.url}/register`, Lift, this.httpOptions).pipe(
      tap((newLift: Lift) => this.log(`added Lift w/ id=${newLift.id}`)),
      catchError(this.handleError<Lift>('addLift'))
    );
  }
  deleteLift(Lift: Lift | number): Observable<Lift> {
    const id = typeof Lift === 'number' ? Lift : Lift.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Lift>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted Lift id=${id}`)),
      catchError(this.handleError<Lift>('deleteLift'))
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
