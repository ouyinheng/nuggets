import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'test', pathMatch: 'full' },
      { path: 'test', loadChildren: './router/test/testRouter.module#TestModule' },
      { path: 'home', loadChildren: './router/home/homeRouter.module#HomeModule' },
      { path: 'dynamic', loadChildren: './router/dynamic/dynamicRouter.module#DynamicModule' },
      { path: 'brochure', loadChildren: './router/brochure/brochureRouter.module#BrochureModule' },
      { path: 'serach', loadChildren: './router/serach/serachRouter.module#SerachModule' },
      { path: 'mine', loadChildren: './router/mine/mineRouter.module#MineModule' },
    ])
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class RoutesModule { }
