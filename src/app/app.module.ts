import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  SchemaFormModule,
  WidgetRegistry,
  DefaultWidgetRegistry,
} from "ngx-schema-form";

@NgModule({
  
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SchemaFormModule.forRoot()
  ],
  providers: [{ provide: WidgetRegistry, useClass: DefaultWidgetRegistry }],
  bootstrap: [AppComponent]
})
export class AppModule { }