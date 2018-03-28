import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { ListKegsComponent } from './list-kegs/list-kegs.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';


@NgModule({
  declarations: [
    AppComponent,
    ListKegsComponent,
    EditKegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
