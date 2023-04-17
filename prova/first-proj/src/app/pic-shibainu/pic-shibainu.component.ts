import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pic-shibainu',
  templateUrl: './pic-shibainu.component.html',
  styleUrls: ['./pic-shibainu.component.scss']
})

export class PicShibainuComponent implements OnInit {

  immagine = ''
  immagine_wallpaper = 'https://wallpapers.com/images/featured-full/sea-background-vakcslo61q7mhgti.jpg'

  immagine_shiba = 'https://material.angular.io/assets/img/examples/shiba2.jpg'

  constructor() {
    console.log("Costruttore")
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    let counter = 0;
    setInterval(() => {
      if (counter % 2 == 0) {
        this.immagine = this.immagine_wallpaper
      }
      else {
        this.immagine = this.immagine_shiba
      }
      counter++
    }, 2000)
  }
}


