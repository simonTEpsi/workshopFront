import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    NgxChartsModule,
    RouterModule,
  ],
  declarations: [
    MenuComponent,
    SideMenuComponent,
  ],
  exports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    NgxChartsModule,
    RouterModule,
    MenuComponent,
    SideMenuComponent
  ],
  entryComponents: [
  ],

  providers: [],
})
export class SharedModule { }
