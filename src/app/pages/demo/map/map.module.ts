import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { AngularEchartsModule } from 'ngx-echarts';

@NgModule({
  imports:      [
    CommonModule,
    MapRoutingModule,
    AngularEchartsModule,
    HttpModule
  ],
  declarations: [MapComponent, MapComponent],
  exports:      [MapComponent]
})
export class MapModule {
}
