import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListKegsComponent } from './list-kegs/list-kegs.component';


@NgModule({
  declarations: [
    AppComponent,
    ListKegsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
