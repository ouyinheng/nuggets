import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestService } from '../../core/test.service';
import { ShareModule } from '../../components/share.module'

import { MainComponent } from './main.component'
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild([
      {
        path: '', 
        component: MainComponent,
        children: [
          { path: 'home', loadChildren: '../home/homeRouter.module#HomeModule' },
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