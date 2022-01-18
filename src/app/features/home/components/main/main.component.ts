import { Component, OnInit } from '@angular/core';
import { Main } from '../../models/home';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public main: Main[]

  constructor() {

    this.main = [
      {
        title: "812 Superfast",
        text: "EL MÁS POTENTE Y RÁPIDO FERRARI HASTA LA FECHA",
        img: {
          src: "../../../../../assets/812superfast.jpg",
          alt: "ferrari 812 superfast"
        }
      },
      {
        title: "458 Italia",
        text: "MULTIPREMIADO MOTOR V8 CENTRAL TRASERO",
        img: {
          src: "../../../../../assets/458italia.jpg",
          alt: "ferrari 458 Italia"
        }
      },
      {
        title: "Roma",
        text: "ELEGANCIA ATEMPORAL",
        img: {
          src: "../../../../../assets/roma.jpg",
          alt: "ferrari Roma"
        }
      },
      {
        title: "488 Pista",
        text: "LA ADRENALINA DEL CIRCUITO, EN CUALQUIER CARRETERA",
        img: {
          src: "../../../../../assets/488pista.jpg",
          alt: "ferrari 488 pista"
        }
      },
      {
        title: "F8 Atributo",
        text: "UN ATRIBUTO A LA EXCELENCIA",
        img: {
          src: "../../../../../assets/F8tributo.jpg",
          alt: "ferrari F8 Atributo"
        }
      },
      {
        title: "SF90 Stradale",
        text: "EL NUEVO SUPER COCHE DE PRODUCCIÓN EN SERIE",
        img: {
          src: "../../../../../assets/SF90.jpg",
          alt: "ferrari SF90 Stradale"
        }
      }

    ]
  }


  ngOnInit(): void {
  }

}
