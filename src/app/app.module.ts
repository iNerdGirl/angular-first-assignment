import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { FailMessageComponent } from './success-message/fail-message/fail-message.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccessMessageComponent,
    FailMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
