import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestService } from '../../core/test.service';

import { LoginComponent } from './login/login.component'
@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: LoginComponent}
    ])
  ],
  declarations: [LoginComponent],
  providers: [
    {provide: 'test', useClass: TestService}
  ],
  exports: [ RouterModule ]
})
export class TestModule {}