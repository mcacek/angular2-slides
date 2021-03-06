import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { DynamicHTMLModule } from 'ng-dynamic';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { SlideDeckComponent } from './slide-deck/slide-deck.component';
import { DisplayDateComponent } from './shared/components/';

@NgModule({
  declarations: [
    AppComponent,
    SlideDeckComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    DynamicHTMLModule
      .forRoot({
        components: [
          {
            component: DisplayDateComponent,
            selector: 'opi-display-date'
          }
        ]
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
