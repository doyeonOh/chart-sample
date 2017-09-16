import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComparisonComponent } from './pages/comparison/comparison.component';
import { DemoComponent } from './pages/demo/demo.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/comparison',
        pathMatch: 'full'
      },
      {
        path: 'comparison',
        component: ComparisonComponent
      },
      {
        path: 'demo',
        loadChildren: 'app/pages/demo/demo.module#DemoModule'
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
