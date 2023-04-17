import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent {
  title = 'first-proj';

  onInput(event: Event) {
    this.title = (<HTMLInputElement>event.target).value
    console.log((<HTMLInputElement>event.target).value)
  }

  onClick(event: Event) {
    this.title = 'nuovo titolo'
  }
  /*onInput(event: any) {
    console.log()
  }*/
}
