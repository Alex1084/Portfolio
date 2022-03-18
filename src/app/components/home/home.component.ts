import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = "bien le bonjour ! je vous souhaite une exelente journée"
  constructor() { }

  ngOnInit(): void {
  }

}
