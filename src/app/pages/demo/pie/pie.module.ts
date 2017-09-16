import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieRoutingModule } from './pie-routing.module';
import { PieComponent } from './pie.component';
import { AngularEchartsModule } from 'ngx-echarts';

@NgModule({
  imports:      [
    CommonModule,
    PieRoutingModule,
    AngularEchartsModule
  ],
  declarations: [PieComponent, PieComponent],
  exports:      [PieComponent]
})
export class PieModule {
}
