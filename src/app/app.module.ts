import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjetPersoComponent } from './components/projet-perso/projet-perso.component';
import { ProjetService } from './projet.service';
import { DetailsComponent } from './components/details/details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TitleComponent } from './components/title/title.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjetPersoComponent,
    DetailsComponent,
    NotFoundComponent,
    TitleComponent
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
