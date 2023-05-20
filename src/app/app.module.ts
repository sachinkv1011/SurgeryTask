import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from'@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './create/create.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CreateSurgeryPageComponent } from './create-surgery-page/create-surgery-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    NavigationComponent,
    CreateSurgeryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
