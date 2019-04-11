import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MineComponent } from './mine.component';

@NgModule({
  imports: [
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