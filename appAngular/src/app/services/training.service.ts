import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Training } from '../interfaces/training';


@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private url = 'http://localhost:8000/training';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { }

  getTrainings(): Observable<Training[]> {
    return this.http.get<Training[]>(this.url)
 
  }
  getTraining(id: number): Observable<Training> {
    const url = `${this.url}/${id}`;
    return this.http.get<Training>(url)
  }
  addTraining(training: Training): Observable<Training> {
    return this.http.post<Training>(`${this.url}/register`, training, this.httpOptions).pipe(
      tap((newTraining: Training) => this.log(`added training w/ id=${newTraining.id}`)),
      catchError(this.handleError<Training>('addTraining'))
    );
  }
  deleteTraining(training: Training | number): Observable<Training> {
    const id = typeof training === 'number' ? training : training.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Training>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted training id=${id}`)),
      catchError(this.handleError<Training>('deleteTraining'))
    );
  }
  updateTraining(training: Training): Observable<any> {
    const urlupdate = `${this.url}/${training.id}`;
    return this.http.put(urlupdate, training, this.httpOptions).pipe(
      tap(_ => this.log(`updated training id=${training.id}`)),
      catchError(this.handleError<any>('updateTraining'))
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
