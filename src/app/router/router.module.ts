import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', loadChildren: './main/mainRouter.module#MainModule' }
    ])
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class RoutesModule { }
