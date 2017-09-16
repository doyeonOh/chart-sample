import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordcloudRoutingModule } from './wordcloud-routing.module';
import { WordcloudComponent } from './wordcloud.component';
import { AngularEchartsModule } from 'ngx-echarts';

@NgModule({
  imports:      [
    CommonModule,
    WordcloudRoutingModule,
    AngularEchartsModule
  ],
  declarations: [WordcloudComponent, WordcloudComponent],
  exports:      [WordcloudComponent]
})
export class WordcloudModule {
}
