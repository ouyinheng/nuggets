import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MineComponent } from './mine.component';
import { ShareModule } from '../../components/share.module';
@NgModule({
  imports: [
    ShareModule,
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