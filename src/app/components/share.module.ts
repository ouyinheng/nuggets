import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CustomModule} from './custom.module';
import { ButtonComponent } from './src/button/button.component';
import { InputComponent } from './src/input/input.component';
@NgModule({
  imports: [
    CustomModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    InputComponent
  ],
  exports: [
    CustomModule,
    ReactiveFormsModule,
    ButtonComponent,
    InputComponent
  ]
})
export class ShareModule {

}
