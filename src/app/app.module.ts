import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjetPersoComponent } from './components/projet-perso/projet-perso.component';
import { ProjetService } from './projet.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TitleComponent } from './components/title/title.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PipeModule } from './pipes/pipe.module';
import { CvComponent } from './components/cv/cv.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjetPersoComponent,
    NotFoundComponent,
    TitleComponent,
    NavbarComponent,
    CvComponent
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
