import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CustomModule} from './custom.module';
@NgModule({
  imports: [
    CustomModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
  ],
  exports: [
    CustomModule,
    ReactiveFormsModule
  ]
})
export class ShareModule {

}
