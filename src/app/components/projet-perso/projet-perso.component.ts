import { Component, OnInit } from '@angular/core';
import { IProjet } from '../../Projet';
import { ProjetService } from '../../projet.service';

@Component({
  selector: 'app-projet-perso',
  templateUrl: './projet-perso.component.html',
  styleUrls: ['./projet-perso.component.scss']
})
export class ProjetPersoComponent implements OnInit {

  projetInModal: IProjet = {
    id: 0,
    titre: '',
    intro: '',
    details: '',
    github: '',
    autre: ''

  };
  modalIsActive: boolean = false;
  public projets: IProjet[] = [];
  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {
    this.projetService.getProjet().subscribe(data => (this.projets = data));
  }
  detail(unProjet: IProjet) {

    this.projetInModal = unProjet;

    this.modalShow();
  };

  modalShow() {
    this.modalIsActive = true;
  }
  modalClose() {
    this.modalIsActive = false;
  }
}
