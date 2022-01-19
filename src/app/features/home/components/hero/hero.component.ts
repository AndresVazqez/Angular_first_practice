import { Component, OnInit,  } from '@angular/core';
import { Hero } from '../../models/home';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  
  public hero: Hero;  

  constructor() {
    
    this.hero = {
      img: {
        src: '../../../../../assets/hero.png', 
        alt: 'Ferrari 812 GTS'
      },
      title: "FERRARI 812 GTS: VUELVE EL V12 SPIDER",
      description: "Sus 800 cv lo convierten en el descapotable de producción en serie con más potencia del mercado"
    }

  
  }
  ngOnInit(): void {
}
}