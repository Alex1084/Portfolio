import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjetPersoComponent } from './projet-perso/projet-perso.component';
import { ProjetService } from './projet.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjetPersoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProjetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
