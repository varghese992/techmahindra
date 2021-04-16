import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { gridComponent } from './grid-component/grid-component.component';
import { verticalComponent } from './vertical-component/vertical-component.component';

@NgModule({
  declarations: [
    AppComponent,
    gridComponent,
    verticalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
