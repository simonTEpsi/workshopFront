import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { sideMenuItems } from '../../constant/side-menu-items.constant';
import { MenuItems } from '../../models/menu-items.model';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
  })
  export class SideMenuComponent implements OnInit {

    menuItems: MenuItems[] = sideMenuItems;

    constructor(
      private router: Router,
      private route: ActivatedRoute
    ) { }
    
    ngOnInit(): void {
      console.log(this.router);
      console.log(this.router.routerState);
      console.log(this.router.routerState.snapshot);
    }
    
  }  