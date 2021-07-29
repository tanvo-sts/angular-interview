import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        left: 0
      })),
      state('close', style({
        left: '-100%'
      })),
      transition('open => close', [
        animate('0.5s ease-in-out')
      ]),
      transition('close => open', [
        animate('0.5s ease-in-out')
      ]),
    ])
  ]
})
export class NavigationBarComponent implements OnInit {
  isOpen = false;
  currentPath: any;
  routeList = [
    {
      name: 'Landing Page',
      path: '/landing-page'
    },
    {
      name: 'Second Page',
      path: '/second-page'
    },
    {
      name: 'Third Page',
      path: '/third-page'
    }
  ]

  constructor(private router: Router) {
    this.currentPath = this.router.url;
  }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.isOpen = !this.isOpen;
  }
}
