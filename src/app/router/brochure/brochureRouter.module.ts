import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrochureComponent } from './brochure.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: BrochureComponent}
    ])
  ],
  declarations: [BrochureComponent],
  providers: [
  ],
  exports: [ RouterModule ]
})
export class BrochureModule {}