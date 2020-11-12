import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit, OnChanges {
  public header: boolean;
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Trouver un trajet",
      url: "",
      icon: "heart",
    },
    {
      title: "Proposer un trajet",
      url: "/create-trip",
      icon: "paper-plane",
    },
    {
      title: "Mon compte",
      url: "/account",
      icon: "mail",
    },
    {
      title: "Faq",
      url: "/faq",
      icon: "archive",
    },
    {
      title: "Support technique",
      url: "/contact",
      icon: "at-outline",
    },
    {
      title: "Mentions Légales",
      url: "/mentions-legales",
      icon: "warning",
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.authenticationState.subscribe((state) => {
        if (state) {
          this.router.navigate([""]);
        } else {
          this.router.navigate(["login"]);
        }
      });
    });
  }

  ngOnInit() {
    const path = window.location.pathname;
    console.error(path);
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
    if (path === "/login" || path === "/register" || path === "/messaging") {
      this.header = false;
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    changes.header;
  }
  logout() {
    this.authService.logout();
  }
}
