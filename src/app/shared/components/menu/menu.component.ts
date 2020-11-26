import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    idSelectedApp: number;
    
    selectedApp: any;

    applications = [
        {
            'id': 1,
            'name': 'Application 1'
        }, {
            'id': 2,
            'name': 'Application 2'
        },
    ]

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        ) { }

    ngOnInit(): void {
        this.router.routeReuseStrategy.shouldReuseRoute = () =>false;
        this.idSelectedApp = Number(window.location.href.split('/')[window.location.href.split('/').length-1]);
        this.setSelectedApp();
        this.selectedApp = this.applications.find((app) => app.id === this.idSelectedApp);
    }

    redirectTo(appId: number): void {
        this.idSelectedApp = appId;
        this.setSelectedApp();
        this.router.navigate(['/dashboard/'+appId]);
    }

    setSelectedApp(){
        this.selectedApp = this.applications.find((app) => app.id === this.idSelectedApp);
    }
}