import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CustomModule} from './custom.module';
import { ButtonComponent } from './share/button/button.component';
@NgModule({
  imports: [
    CustomModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    ButtonComponent
  ],
  exports: [
    CustomModule,
    ReactiveFormsModule,
    ButtonComponent
  ]
})
export class ShareModule {

}
