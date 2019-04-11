import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RoutesModule } from './router/router.module';

// util
import { Utils } from './util/utils'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutesModule,
    HttpClientModule
  ],
  providers: [
    {provide: 'util', useClass: Utils}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
