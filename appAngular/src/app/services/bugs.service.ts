import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Bugs } from '../interfaces/bugs';
import { environment } from '../../environments/environment';
const urlroot = environment.urlroot;
@Injectable({
  providedIn: 'root'
})
export class BugsService {
  private url = urlroot + '/bug_report';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }
  getBugs(): Observable<Bugs[]> {

    return this.http.get<Bugs[]>(this.url)
      .pipe(
        tap(_ => this.log('fetched Bugs')),
        catchError(this.handleError<Bugs[]>('getBugs', []))
      );
  }
  getBug(id: number): Observable<Bugs> {
    const url = `${this.url}/${id}`;
    return this.http.get<Bugs>(url).pipe(
      tap(_ => this.log(`fetched Bug id=${id}`)),
      catchError(this.handleError<Bugs>(`getBug id=${id}`))
    );
  }
  updateBugs(Bugs: Bugs): Observable<any> {
    const urlupdate = `${this.url}/${Bugs.id}`;
    return this.http.put(urlupdate, Bugs, this.httpOptions).pipe(
      tap(_ => this.log(`updated Bugs id=${Bugs.id}`)),
      catchError(this.handleError<any>('updateBugs'))
    );
  }
  addBugs(Bugs: Bugs): Observable<Bugs> {
    return this.http.post<Bugs>(`${this.url}/register`, Bugs, this.httpOptions).pipe(
      tap((newBugs: Bugs) => this.log(`added Bugs w/ id=${newBugs.id}`)),
      catchError(this.handleError<Bugs>('addBugs'))
    );
  }
  deleteBugs(Bugs: Bugs | number): Observable<Bugs> {
    const id = typeof Bugs === 'number' ? Bugs : Bugs.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Bugs>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted Bugs id=${id}`)),
      catchError(this.handleError<Bugs>('deleteBugs'))
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
