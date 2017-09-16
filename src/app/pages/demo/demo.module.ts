import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:      [
    CommonModule,
    DemoRoutingModule,
  ],
  declarations: [DemoComponent],
  exports:      [DemoComponent]
})
export class DemoModule {
}
