import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public darkMode : boolean = true;
  public changeMode = () => {
    
    !this.darkMode ? this.darkMode = true : this.darkMode = false;
         
  }



  constructor() {  

   }

  ngOnInit(): void {
  }

  

}
