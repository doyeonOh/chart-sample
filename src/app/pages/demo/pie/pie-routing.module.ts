import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { PieComponent } from './pie.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PieComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PieRoutingModule {}
