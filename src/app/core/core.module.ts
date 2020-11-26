import { NgModule } from '@angular/core';
import { BaseModule } from '../modules/base/base.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        BaseModule,
        //HttpClientModule
    ],
    //exports: [HeaderComponent, LoaderComponent],
    //declarations: [HeaderComponent, LoaderComponent],
    providers: [
      /* services and resolvers */
    ],
  })
  export class CoreModule {}
  