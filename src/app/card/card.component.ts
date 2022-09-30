import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public imagen: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Youtube.png/2560px-Youtube.png";
  public titulo: string = "Curso de Angular con Interpolación";
  constructor() { }

  ngOnInit(): void {
  }

}
