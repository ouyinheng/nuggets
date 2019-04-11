import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestService } from '../../core/test.service';

import { MainComponent } from './main.component'
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', 
        component: MainComponent,
        children: [
          { path: '', loadChildren: '../home/homeRouter.module#HomeModule' },
          { path: 'dynamic', loadChildren: '../dynamic/dynamicRouter.module#DynamicModule' },
          { path: 'brochure', loadChildren: '../brochure/brochureRouter.module#BrochureModule' },
          { path: 'search', loadChildren: '../search/searchRouter.module#SearchModule' },
          { path: 'mine', loadChildren: '../mine/mineRouter.module#MineModule' }
        ]
      }
    ])
  ],
  declarations: [MainComponent],
  providers: [
    {provide: 'test', useClass: TestService}
  ],
  exports: [ RouterModule ]
})
export class MainModule {}