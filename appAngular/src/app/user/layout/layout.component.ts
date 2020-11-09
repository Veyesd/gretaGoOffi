import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  
  items: NbMenuItem[] = [
    {
      title: 'Se connecter',
      link: '../auth/login',
      icon: 'home-outline',
    },
    {
      title: 'Profil',
      link: './profile',
      icon: 'smiling-face-outline',
    },
    {
      title: 'trajet',
      link: './journey',
      icon: 'smiling-face-outline',
    },
  ];
  constructor(private themeService: NbThemeService) {
    this.themeService.changeTheme('default');
  }

  ngOnInit(): void {
  }

}
