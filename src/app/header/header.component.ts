import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public linkImagenHeader: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Youtube.png/2560px-Youtube.png";

  constructor() { }

  ngOnInit(): void {
  }

}
