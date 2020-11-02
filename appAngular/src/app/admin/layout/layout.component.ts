import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  
  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      link: '/admin',
      icon: 'home-outline'
    },
    {
      title: 'Utilisateurs',
      link: '/admin/users',
      icon: 'smiling-face-outline',
    },
    {
      title: 'Formations',
      link: '/admin/formations',
      icon: 'smiling-face-outline',
      expanded: true,
    },
    {
      title: 'Lieux de formations',
      link: '/admin/places',
      icon: 'smiling-face-outline',
      expanded: true,
    },
    {
      title: 'Rapport de bug',
      link: '/admin/bugs',
      icon: 'smiling-face-outline',
      expanded: true,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
