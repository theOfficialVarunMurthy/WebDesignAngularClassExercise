import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersonComponent } from './person/person.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, PersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
