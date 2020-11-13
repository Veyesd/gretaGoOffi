import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { TrainingHasPlace } from '../interfaces/training_has_place';
import { environment } from '../../environments/environment';
const urlroot = environment.urlroot;
@Injectable({
  providedIn: 'root'
})
export class TrainingHasPlaceService {
  private url = urlroot + '/training_has_place';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }
  getTrainingHasPlaces(): Observable<TrainingHasPlace[]> {

    return this.http.get<TrainingHasPlace[]>(this.url)
      .pipe(
        tap(_ => this.log('fetched TrainingHasPlace')),
        catchError(this.handleError<TrainingHasPlace[]>('getTrainingHasPlace', []))
      );
  }
  getTrainingHasPlace(id: number): Observable<TrainingHasPlace> {
    const url = `${this.url}/${id}`;
    return this.http.get<TrainingHasPlace>(url).pipe(
      tap(_ => this.log(`fetched TrainingHasPlace id=${id}`)),
      catchError(this.handleError<TrainingHasPlace>(`getTrainingHasPlace id=${id}`))
    );
  }
  updateTrainingHasPlace(TrainingHasPlace: TrainingHasPlace): Observable<any> {

    return this.http.put(this.url, TrainingHasPlace, this.httpOptions).pipe(
      tap(_ => this.log(`updated TrainingHasPlace id=${TrainingHasPlace.training_id}`)),
      catchError(this.handleError<any>('updateTrainingHasPlace'))
    );
  }
  addTrainingHasPlace(TrainingHasPlace: TrainingHasPlace): Observable<TrainingHasPlace> {
    return this.http.post<TrainingHasPlace>(`${this.url}/register`, TrainingHasPlace, this.httpOptions).pipe(
      tap((newTrainingHasPlace: TrainingHasPlace) => this.log(`added TrainingHasPlace w/ id=${newTrainingHasPlace.training_id}`)),
      catchError(this.handleError<TrainingHasPlace>('addTrainingHasPlace'))
    );
  }
  deleteTrainingHasPlace(TrainingHasPlace: TrainingHasPlace | number): Observable<TrainingHasPlace> {
    const id = typeof TrainingHasPlace === 'number' ? TrainingHasPlace : TrainingHasPlace.training_id;
    const url = `${this.url}/${id}`;

    return this.http.delete<TrainingHasPlace>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted TrainingHasPlace id=${id}`)),
      catchError(this.handleError<TrainingHasPlace>('deleteTrainingHasPlace'))
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
