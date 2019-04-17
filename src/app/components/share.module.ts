import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CustomModule} from './custom.module';
import { ButtonComponent } from './src/button/button.component';
import { InputComponent } from './src/input/input.component';
import { DropdownComponent } from './src/dropdown/dropdown.component';
import { DropdownItemComponent } from './src/dropdown-item/dropdown-item.component';
import { SelectComponent } from './src/select/select.component';
import { InputNumberComponent } from './src/input-number/input-number.component';
import { ListGroupComponent } from './src/list-group/list-group.component';
import { ListItemComponent } from './src/list-item/list-item.component';
import { CardComponent } from './src/card/card.component';
import { MessageComponent } from './src/message/message.component';
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
    InputNumberComponent,
    ListGroupComponent,
    ListItemComponent,
    CardComponent,
    MessageComponent
  ],
  exports: [
    CustomModule,
    ReactiveFormsModule,
    ButtonComponent,
    InputComponent,
    DropdownComponent,
    DropdownItemComponent,
    SelectComponent,
    InputNumberComponent,
    ListGroupComponent,
    ListItemComponent
  ],
  providers: [
  ]
})
export class ShareModule {

}
