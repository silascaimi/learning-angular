import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './first-component/first-component.component';
import { ConvertToSpacesPipe } from './resources/convert-to-spaces';
import { SecondComponentComponent } from './second-page/second-component/second-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ConvertToSpacesPipe,
    SecondComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
