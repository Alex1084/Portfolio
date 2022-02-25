import { Component, OnInit } from '@angular/core';
import { IProjet } from '../Projet';
import { ProjetService } from '../projet.service';

@Component({
  selector: 'app-projet-perso',
  templateUrl: './projet-perso.component.html',
  styleUrls: ['./projet-perso.component.scss']
})
export class ProjetPersoComponent implements OnInit {

  public projets: IProjet[] = [];
  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {
    this.projetService.getProjet().subscribe(data => (this.projets = data));
  }

}
