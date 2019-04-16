import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// materail
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RoutesModule } from './router/router.module';

// util
import { Utils } from './util/utils';
import { LoginService } from './core/login.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RoutesModule,
    HttpClientModule
  ],
  providers: [
    {provide: 'util', useClass: Utils},
    { provide: 'userinfo', useClass: LoginService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
