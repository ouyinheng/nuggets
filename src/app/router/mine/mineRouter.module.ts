import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MineComponent } from './mine.component';
import { ShareModule } from '../../components/share.module';
@NgModule({
  imports: [
    ShareModule,
    CommonModule,
    RouterModule.forChild([
      {path: '', component: MineComponent}
    ])
  ],
  declarations: [MineComponent],
  providers: [
  ],
  exports: [ RouterModule ]
})
export class MineModule {}
