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
import { NavbarComponent } from './components/navbar/navbar.component';
import { PipeModule } from './pipes/pipe.module';
import { PipePerso } from './pipes/pipes-perso';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjetPersoComponent,
    DetailsComponent,
    NotFoundComponent,
    TitleComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PipeModule
  ],
  providers: [ProjetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
