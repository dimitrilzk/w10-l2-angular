import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Page1Page } from './page1/page1.page';
import { Page2Page } from './page2/page2.page';
import { Page3Page } from './page3/page3.page';

const routes: Routes = [
  {
    path: '',

  },
  {
    path: 'page1',
    component: Page1Page
  }
]

@NgModule({
  declarations: [
    AppComponent,
    Page1Page,
    Page2Page,
    Page3Page
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
