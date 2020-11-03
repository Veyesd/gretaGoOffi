import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Mon compte',
      url: '/pages/account',
      icon: 'mail'
    },
    {
      title: 'Proposer un trajet',
      url: '/pages/trip',
      icon: 'paper-plane'
    },
    {
      title: 'Trouver un trajet',
      url: '/pages/home',
      icon: 'heart'
    },
    {
      title: 'Faq',
      url: '/pages/faq',
      icon: 'archive'
    },
    {
      title: 'Support technique',
      url: '/pages/setting',
      icon: 'trash'
    },
    {
      title: 'Mentions Légales',
      url: '/pages/mentionslegales',
      icon: 'warning'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}

