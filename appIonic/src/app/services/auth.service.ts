import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { take, map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';

const helper = new JwtHelperService();
const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private http: HttpClient,
    private helper: JwtHelperService,
    private storage: Storage,
    private plt: Platform,
    private alertController: AlertController,
    private router: Router,
  ) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then((token) => {
      if (token) {
        const decoded = this.helper.decodeToken(token);
        const isExpired = this.helper.isTokenExpired(token);

        if (!isExpired) {
          this.user = decoded;
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }

  register(credentials) {
    this.http.post(`${this.url}/user/register`, credentials,this.httpOptions).subscribe(
      (res) => {
        console.log("Compte créé")
        this.router.navigate(['/validate-message/1'])
      },
      (e) => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      }
    );
  }

  login(credentials) {
    this.http.post(`${this.url}/auth/login`, credentials).subscribe(
      (res) => {
        this.storage.set(TOKEN_KEY, res['access_token']);
        this.user = this.helper.decodeToken(res['access_token']);
        this.authenticationState.next(true);
        localStorage.setItem('id', this.user.id)
        this.router.navigate(['']);

      },
      (e) => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      }
    );
  }

  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  getSpecialData() {
    return this.http.get(`${this.url}/auth/`).pipe(
      catchError((e) => {
        const status = e.status;
        if (status === 401) {
          this.showAlert('You are not authorized for this!');
          this.logout();
        }
        throw new Error(e);
      })
    );
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  showAlert(msg) {
    const alert = this.alertController.create({
      message: msg,
      header: 'Email ou mot de passe incorrect',
      buttons: ['OK'],
    });
    alert.then((alert) => alert.present());
  }
}
