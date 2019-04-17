import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShareModule } from '../../components/share.module';
import { ShowComponent } from './show/show.component';
import { ShowlistComponent } from './showlist/showlist.component';
// component

import { ButtonComponent } from './component/button/button.component';
import { InputComponent } from './component/input/input.component';
import { DropdownComponent } from './component/dropdown/dropdown.component';
import { SelectComponent } from './component/select/select.component';
import { ListComponent } from './component/list/list.component';
import { MessageComponent } from './component/message/message.component';
@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild([
      // { path: '', component: ShowComponent },
      { path: '', component: ShowlistComponent},
      { path: 'button', component: ButtonComponent},
      { path: 'input', component: InputComponent},
      { path: 'dropdown', component: DropdownComponent},
      { path: 'select', component: SelectComponent},
      { path: 'list', component: ListComponent},
      { path: 'message', component: MessageComponent}
    ])
  ],
  declarations: [
    ShowComponent,
    ShowlistComponent,
    ButtonComponent,
    InputComponent,
    DropdownComponent,
    SelectComponent,
    ListComponent,
    MessageComponent
  ],
  providers: [
  ],
  exports: [ RouterModule ]
})
export class TestModule {}
