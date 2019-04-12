import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './materail.module';

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
  ],
  exports: [
    FormsModule,
    MaterialModule,
  ]
})
export class CustomModule {

}
