import { Component, OnInit } from '@angular/core';
import { ApplicationService } from './core/http/application/application.service';
import { Application } from './shared/models/application.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'workshopFront';
  public listApplications: Application[] = [];

  constructor (
    public applicationService: ApplicationService
  ) {}

  ngOnInit(): void {
    console.log(123);
    this.getApplications();
  }

  private getApplications() {
    /*this.applicationService.getApplications().subscribe((result) => {
      result.forEach((application: Application) => {
        this.listApplications.push(
          new Application(application.id, application.name)
        );
      });
    });*/

    this.listApplications = [
      {
          'id': 1,
          'name': 'Application 1'
      }, {
          'id': 2,
          'name': 'Application 2'
      },
    ]
  }
}
