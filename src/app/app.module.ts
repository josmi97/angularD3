import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SharedModule } from './modules/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';  

@NgModule({
  declarations: [
    AppComponent, 
    SideBarComponent, 
    HeaderComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
