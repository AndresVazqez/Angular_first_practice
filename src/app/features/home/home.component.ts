import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public darkMode : boolean = true;
  public changeMode = () => {   

    if (this.darkMode == false) {
      this.darkMode = true;
    }  else {      
      this.darkMode = false;
    }      
  }



  constructor() {  

   }

  ngOnInit(): void {
  }

  

}
