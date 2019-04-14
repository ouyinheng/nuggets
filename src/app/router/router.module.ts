import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../components/share.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'main/home', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, data: { animation: 'login' }},
      { path: 'main',
        component: MainComponent,
        children: [
          { path: 'home', loadChildren: '../home/homeRouter.module#HomeModule' },
          { path: 'dynamic', loadChildren: '../dynamic/dynamicRouter.module#DynamicModule' },
          { path: 'brochure', loadChildren: '../brochure/brochureRouter.module#BrochureModule' },
          { path: 'search', loadChildren: '../search/searchRouter.module#SearchModule' },
          { path: 'mine', loadChildren: '../mine/mineRouter.module#MineModule' }
        ],
        data: { animation: 'heroes' }
      }
    ])
  ],
  declarations: [MainComponent, LoginComponent],
  exports: [ RouterModule ]
})
export class RoutesModule { }
