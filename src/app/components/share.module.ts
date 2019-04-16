import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CustomModule} from './custom.module';
import { ButtonComponent } from './src/button/button.component';
import { InputComponent } from './src/input/input.component';
import { DropdownComponent } from './src/dropdown/dropdown.component';
import { DropdownItemComponent } from './src/dropdown-item/dropdown-item.component';
import { SelectComponent } from './src/select/select.component';
import { OptionComponent } from './src/option/option.component';
@NgModule({
  imports: [
    CustomModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    InputComponent,
    DropdownComponent,
    DropdownItemComponent,
    SelectComponent,
    OptionComponent
  ],
  exports: [
    CustomModule,
    ReactiveFormsModule,
    ButtonComponent,
    InputComponent,
    DropdownComponent,
    DropdownItemComponent,
    SelectComponent,
    OptionComponent
  ]
})
export class ShareModule {

}
