import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Page1Page } from './page1/page1.page';
import { Page2Page } from './page2/page2.page';
import { Page3Page } from './page3/page3.page';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page1'

  },
  {
    path: 'page1',
    component: Page1Page
  },
  {
    path: 'page2',
    component: Page2Page
  },
  {
    path: 'page3',
    component: Page3Page
  },
]

@NgModule({
  declarations: [
    AppComponent,
    Page1Page,
    Page2Page,
    Page3Page,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
