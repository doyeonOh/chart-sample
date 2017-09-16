import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarRoutingModule } from './bar-routing.module';
import { BarComponent } from './bar.component';
import { AngularEchartsModule } from 'ngx-echarts';

@NgModule({
  imports:      [
    CommonModule,
    BarRoutingModule,
    AngularEchartsModule
  ],
  declarations: [BarComponent, BarComponent],
  exports:      [BarComponent]
})
export class BarModule {
}
