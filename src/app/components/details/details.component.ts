import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'src/app/projet.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {
  }

}
