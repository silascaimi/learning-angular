import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './first-component/first-component.component';
import { ConvertToSpacesPipe } from './resources/convert-to-spaces';
import { SecondComponent } from './second-page/second-component/second-component.component';
import { RouterModule } from '@angular/router';
import { ThirdComponent } from './third-page/third/third.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ConvertToSpacesPipe,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'first-component', component: FirstComponent },
      { path: 'first-component/:id', component: ThirdComponent },
      { path: 'second-component', component: SecondComponent },
      { path: '', redirectTo: 'first-component', pathMatch: 'full' },
      { path: '**', redirectTo: 'first-component', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
