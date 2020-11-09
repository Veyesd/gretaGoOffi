import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {
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
    private router: Router
  ) { }


  ngOnInit() { }
  logout(){
    this.authService.logout();
  }
}
