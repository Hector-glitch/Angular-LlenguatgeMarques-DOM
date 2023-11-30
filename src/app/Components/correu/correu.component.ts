import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-correu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './correu.component.html',
  styleUrl: './correu.component.css'
})
export class CorreuComponent {
  correu: any;

  constructor() {
    this.correu= {
      titol: "Practica Correu ELECTRONIC Angular8",
      contingut: "Aquest es el cos del correu",
      emisor: "hector.vinas@institutvidreres.cat",
      destinatari: "adria.tregon.muniesa@gmail.com",
      numLletresTitol: 0
    }
    this.correu.numLletresTitol = this.correu.titol.length;
  }
  incrementar(){
    this.correu.numLletresTitol++;
  }
  protected readonly length = length;
}
