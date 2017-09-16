import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineRoutingModule } from './line-routing.module';
import { LineComponent } from './line.component';
import { AngularEchartsModule } from 'ngx-echarts';

@NgModule({
  imports:      [
    CommonModule,
    LineRoutingModule,
    AngularEchartsModule
  ],
  declarations: [LineComponent, LineComponent],
  exports:      [LineComponent]
})
export class LineModule {
}
