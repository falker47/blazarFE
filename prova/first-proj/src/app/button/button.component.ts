import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  isDisabled = false

  constructor() {
    console.log("costruttore")
  }

// ogni 2000ms is disabled passa da T=>F e viceversa
  ngOnInit(): void{
    console.log("costruttore")
    setInterval(()=> {
      this.isDisabled = !this.isDisabled
    }, 2000)
  }
}
