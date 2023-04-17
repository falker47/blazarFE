import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-test',
  templateUrl: './directives-test.component.html',
  styleUrls: ['./directives-test.component.scss']
})

export class DirectivesTestComponent {

isVisible = true;

cibo = "Pizza";
numero = 3;

persone = [
  {nome: "Pippo", cognome: "Baudo", isOnline: true},
  {nome: "Francisco", cognome: "NotFranco", isOnline: false},
  {nome: "Topo", cognome: "Gigio", isOnline: false},
  {nome: "Esteban Julio Ricardo", cognome: "Montoya de la Rosa Ramirez", isOnline: true},
  {nome: "Ash", cognome: "Ketchum", isOnline: true},
];
}
