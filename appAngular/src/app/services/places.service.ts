import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Place } from '../interfaces/place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private url = 'http://localhost:8000/place';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient ) { }
  getPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.url)
      .pipe(
        tap(_ => this.log('fetched Place')),
        catchError(this.handleError<Place[]>('getPlaces', []))
      );
  }
  getPlace(id: number): Observable<Place> {
    const url = `${this.url}/${id}`;
    return this.http.get<Place>(url).pipe(
      tap(_ => this.log(`fetched place id=${id}`)),
      catchError(this.handleError<Place>(`getPlace id=${id}`))
    );
  }
  updatePlace(place: Place): Observable<any> {
    const urlupdate = `${this.url}/${place.id}`;
    return this.http.put(urlupdate, place, this.httpOptions).pipe(
      tap(_ => this.log(`updated Place id=${place.id}`)),
      catchError(this.handleError<any>('updatePlace'))
    );
  }
  addPlace(place: Place): Observable<Place> {
    return this.http.post<Place>(`${this.url}/register`, place, this.httpOptions ).pipe(
      tap((newPlace: Place) => this.log(`added Place w/ id=${newPlace.id}`)),
      catchError(this.handleError<Place>('addPlace'))
    );
  }
  deletePlace(place: Place | number): Observable<Place> {
    const id = typeof place === 'number' ? place : place.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Place>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted Place id=${id}`)),
      catchError(this.handleError<Place>('deletePlace'))
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
