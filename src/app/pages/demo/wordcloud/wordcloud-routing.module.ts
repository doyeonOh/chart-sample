import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { WordcloudComponent } from './wordcloud.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: WordcloudComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class WordcloudRoutingModule {}
