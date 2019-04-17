import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DynamicComponent } from './dynamic.component';
import { ShareModule } from '../../components/share.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    RouterModule.forChild([
      {path: '', component: DynamicComponent }
    ])
  ],
  declarations: [DynamicComponent],
  providers: [
  ],
  exports: [ RouterModule ]
})
export class DynamicModule {}
