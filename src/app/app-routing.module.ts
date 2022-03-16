import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProjetPersoComponent } from './components/projet-perso/projet-perso.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'projet-personnnel',
    component: ProjetPersoComponent
  },
  {
    path: 'test',
    component: DetailsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
