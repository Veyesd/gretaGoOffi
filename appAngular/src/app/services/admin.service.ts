import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Admin } from '../interfaces/admin';
import { environment } from '../../environments/environment';
const urlroot = environment.urlroot;
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url = urlroot+'/auth';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient ) { }
  getAdmins(): Observable<Admin[]> {
 
    return this.http.get<Admin[]>(this.url)
      .pipe(
        tap(_ => this.log('fetched Admin')),
        catchError(this.handleError<Admin[]>('getAdmin', []))
      );
  }
  getAdmin(id: number): Observable<Admin> {
    const url = `${this.url}/${id}`;
    return this.http.get<Admin>(url).pipe(
      tap(_ => this.log(`fetched Admin id=${id}`)),
      catchError(this.handleError<Admin>(`getAdmin id=${id}`))
    );
  }
  updateAdmin(Admin: Admin): Observable<any> {
    const urlupdate = `${this.url}/${Admin.id}`;
    return this.http.put(urlupdate, Admin, this.httpOptions).pipe(
      tap(_ => this.log(`updated Admin id=${Admin.id}`)),
      catchError(this.handleError<any>('updateAdmin'))
    );
  }
  addAdmin(Admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${this.url}/register`, Admin, this.httpOptions ).pipe(
      tap((newAdmin: Admin) => this.log(`added Admin w/ id=${newAdmin.id}`)),
      catchError(this.handleError<Admin>('addAdmin'))
    );
  }
  deleteAdmin(Admin: Admin | number): Observable<Admin> {
    const id = typeof Admin === 'number' ? Admin : Admin.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Admin>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted Admin id=${id}`)),
      catchError(this.handleError<Admin>('deleteAdmin'))
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
