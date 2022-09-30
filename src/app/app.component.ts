import { Component, OnInit } from '@angular/core';

interface Tarjeta {
  titulo: string;
  subtitulo: string;
  nro?: number; //el signo de pregunta significa que la variable puede ser null y puedo agregarla o no.
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Mi primer app ';
public ArregloTarjetas: Tarjeta[] = []

  ngOnInit(): void {
    this.ArregloTarjetas = [
      {nro: 1, titulo: 'Video 1', subtitulo: 'Video 1'},
      {titulo: 'Video 2', subtitulo: 'Video 2'},            //Ejemplo de nro null
      {nro: 3, titulo: 'Video 3', subtitulo: 'Video 3'},
    ]
  }
}


