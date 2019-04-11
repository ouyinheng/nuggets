import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: TestComponent }
    ])
  ],
  declarations: [TestComponent],
  providers: [
  ],
  exports: [ RouterModule ]
})
export class SearchModule {}