import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { LineComponent } from './line.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LineComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class LineRoutingModule {}
