import { Component, OnInit } from '@angular/core';
import { Footer } from '../../models/home';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public footer : Footer;

  constructor() {
    this.footer = {

      description : "Copyright © Todos los derechos reservados | Andres Upgrader"
    }
   }

  ngOnInit(): void {
  }

}
