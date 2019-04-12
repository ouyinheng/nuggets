import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ShareModule } from '../../components/share.module'
@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ])
  ],
  declarations: [HomeComponent],
  providers: [
  ],
  exports: [ RouterModule ]
})
export class HomeModule {}