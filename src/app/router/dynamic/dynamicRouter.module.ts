import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicComponent } from './dynamic.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: DynamicComponent}
    ])
  ],
  declarations: [DynamicComponent],
  providers: [
  ],
  exports: [ RouterModule ]
})
export class DynamicModule {}