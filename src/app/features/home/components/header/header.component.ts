import { Component, OnInit } from '@angular/core';
import { Header } from '../../models/home';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public header: Header;

  constructor() { 
    this.header = {
      img: {
        src: '../../../../../assets/pngegg.png',
        alt: "Logo Ferrari",
      },

      imgLogo : {
        src: '../../../../../assets/Ferrari_wordmark.svg',
        alt: "Logo Ferrari",
      },      
      name: "Menú",
    }
  }

  ngOnInit(): void {
  }

}
