import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/home';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public gallery! : Gallery; 

  constructor() {
    this.gallery = {
      title: "Galería de fotos",
      imageGallery: [
        {
          src: "../../../../../assets/Ferrari1.jpg",
          alt: "Ferrari"
        },
        {
          src: "../../../../../assets/Ferrari2.jpg",
          alt: "Ferrari"
        },
        {
          src: "../../../../../assets/Ferrari3.jpg",
          alt: "Ferrari"
        },
        {
          src: "../../../../../assets/Ferrari4.jpg",
          alt: "Ferrari"
        },
        {
          src: "../../../../../assets/Ferrari5.jpg",
          alt: "Ferrari"
        },
        {
          src: "../../../../../assets/Ferrari6.jpg",
          alt: "Ferrari"
        },
        {
          src: "../../../../../assets/Ferrari7.jpg",
          alt: "Ferrari"
        },
        {
          src: "../../../../../assets/Ferrari8.jpg",
          alt: "Ferrari"
        }        
      ]
    }
   }

  ngOnInit(): void {
  }

}
