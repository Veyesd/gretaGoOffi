import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Trip } from '../interfaces/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private url = 'http://localhost:8000/trip';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient ) { }
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url)
      .pipe(
        tap(_ => this.log('fetched Place')),
        catchError(this.handleError<Trip[]>('getPlaces', []))
      );
  }
  getTrip(id: number): Observable<Trip> {
    const url = `${this.url}/${id}`;
    return this.http.get<Trip>(url).pipe(
      tap(_ => this.log(`fetched trip id=${id}`)),
      catchError(this.handleError<Trip>(`getPlace id=${id}`))
    );
  }
  updateTrip(trip: Trip): Observable<any> {
    return this.http.put(this.url, trip, this.httpOptions).pipe(
      tap(_ => this.log(`updated Place id=${trip.id}`)),
      catchError(this.handleError<any>('updatePlace'))
    );
  }
  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(`${this.url}/register`, trip, this.httpOptions ).pipe(
      tap((newPlace: Trip) => this.log(`added Place w/ id=${newPlace.id}`)),
      catchError(this.handleError<Trip>('addPlace'))
    );
  }
  deleteTrip(trip: Trip | number): Observable<Trip> {
    const id = typeof trip === 'number' ? trip : trip.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Trip>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted Place id=${id}`)),
      catchError(this.handleError<Trip>('deletePlace'))
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
