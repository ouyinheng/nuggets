import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestService } from '../../core/test.service';

import { LoginComponent } from './login/login.component';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
        children: [
          { path: 'home', loadChildren: '../home/homeRouter.module#HomeModule' },
          { path: 'dynamic', loadChildren: '../dynamic/dynamicRouter.module#DynamicModule' },
          { path: 'brochure', loadChildren: '../brochure/brochureRouter.module#BrochureModule' },
          { path: '', loadChildren: '../search/searchRouter.module#SearchModule' },
          { path: 'mine', loadChildren: '../mine/mineRouter.module#MineModule' }
        ]
      }
    ])
  ],
  declarations: [LoginComponent],
  providers: [
    {provide: 'test', useClass: TestService}
  ],
  exports: [ RouterModule ]
})
export class TestModule {}
