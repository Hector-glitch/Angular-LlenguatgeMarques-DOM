import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-llista-correus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './llista-correus.component.html',
  styleUrl: './llista-correus.component.css'
})
export class LlistaCorreusComponent {
  correus: any[];
  contadorRead = 0;
  contadorNoRead = 0;

  constructor() {
    const correu1 = {
      titol: "Titol del 1",
      contingut: 'Cos del Emai, Cos del Email, Cos del Email',
      emissor: 'hector.vinas@gmail.com',
      destinatari: 'adria.tregon.muniesal@gmail.com',
      llegit: true,
    };
    const correu2 = {
      titol: "Titol del 2",
      contingut: 'Cos del Emai, Cos del Email, Cos del Email',
      emissor: 'hector.vinas2@gmail.com',
      destinatari: 'adria.tregon.muniesal2@gmail.com',
      llegit: false,
    }
    this.correus = [];
    this.correus.push(correu1);
    this.correus.push(correu2);
    if (correu1.llegit){
      this.contadorRead = this.contadorRead+1
    } else (this.contadorNoRead = this.contadorNoRead+1)

    if (correu2.llegit){
      this.contadorRead = this.contadorRead+1
    }else (this.contadorNoRead = this.contadorNoRead+1)
  }
}
