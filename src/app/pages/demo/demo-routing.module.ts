import { BarComponent } from './bar/bar.component';
import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { DemoComponent } from './demo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DemoComponent,
        children: [
          { path: '',     pathMatch: 'full', redirectTo: 'line' },
          { path: 'line',  loadChildren: 'app/pages/demo/line/line.module#LineModule' },
          { path: 'bar',  loadChildren: 'app/pages/demo/bar/bar.module#BarModule' },
          { path: 'pie',  loadChildren: 'app/pages/demo/pie/pie.module#PieModule' },
          { path: 'map',  loadChildren: 'app/pages/demo/map/map.module#MapModule' },
          { path: 'graph',  loadChildren: 'app/pages/demo/graph/graph.module#GraphModule' },
          { path: 'wordcloud',  loadChildren: 'app/pages/demo/wordcloud/wordcloud.module#WordcloudModule' }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRoutingModule {}
