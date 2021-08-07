import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FirstComponent } from './first-component/first-component.component';
import { ConvertToSpacesPipe } from './resources/convert-to-spaces';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
