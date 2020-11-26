import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }, {
        path: 'dashboard',
        component: DashboardComponent,
      }, {
        path: 'dashboard/:idWebsite',
        component: DashboardComponent,
      },
    ]),
    MatListModule,
    MatTableModule,
    SharedModule
  ],
  exports: [],
  declarations: [DashboardComponent],
  entryComponents: [],
  providers: []
})
export class BaseModule { }
