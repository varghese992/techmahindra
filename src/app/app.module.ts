import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { shuffleComponent } from './shuffle-component/shuffle-component.component';
import { sortComponent } from './sort-component/sort-component.component';

@NgModule({
  declarations: [
    AppComponent,
    shuffleComponent,
    sortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
