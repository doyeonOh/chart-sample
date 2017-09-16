import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphRoutingModule } from './graph-routing.module';
import { GraphComponent } from './graph.component';
import { AngularEchartsModule } from 'ngx-echarts';

@NgModule({
  imports:      [
    CommonModule,
    GraphRoutingModule,
    AngularEchartsModule
  ],
  declarations: [GraphComponent, GraphComponent],
  exports:      [GraphComponent]
})
export class GraphModule {
}
