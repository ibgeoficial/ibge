import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CalendarioModule } from '@ibge/calendario';
import { NoticiasModule } from '@ibge/noticias';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalendarioModule.forRoot(),
    NoticiasModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
