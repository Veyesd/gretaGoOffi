import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Alert } from '../interfaces/alert';
import { environment } from '../../environments/environment';
const urlroot = environment.urlroot;
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private url = urlroot+'/alert';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient ) { }
  getAlerts(): Observable<Alert[]> {
 
    return this.http.get<Alert[]>(this.url)
      .pipe(
        tap(_ => this.log('fetched Alert')),
        catchError(this.handleError<Alert[]>('getAlert', []))
      );
  }
  getAlert(id: number): Observable<Alert> {
    const url = `${this.url}/${id}`;
    return this.http.get<Alert>(url).pipe(
      tap(_ => this.log(`fetched Alert id=${id}`)),
      catchError(this.handleError<Alert>(`getAlert id=${id}`))
    );
  }
  updateAlert(Alert: Alert): Observable<any> {
    const urlupdate = `${this.url}/${Alert.id}`;
    return this.http.put(urlupdate, Alert, this.httpOptions).pipe(
      tap(_ => this.log(`updated Alert id=${Alert.id}`)),
      catchError(this.handleError<any>('updateAlert'))
    );
  }
  addAlert(Alert: Alert): Observable<Alert> {
    return this.http.post<Alert>(`${this.url}/register`, Alert, this.httpOptions ).pipe(
      tap((newAlert: Alert) => this.log(`added Alert w/ id=${newAlert.id}`)),
      catchError(this.handleError<Alert>('addAlert'))
    );
  }
  deleteAlert(Alert: Alert | number): Observable<Alert> {
    const id = typeof Alert === 'number' ? Alert : Alert.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Alert>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted Alert id=${id}`)),
      catchError(this.handleError<Alert>('deleteAlert'))
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
