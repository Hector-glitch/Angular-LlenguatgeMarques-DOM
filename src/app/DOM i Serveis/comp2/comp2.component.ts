import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServeiService} from "../servei/servei.service";


@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component implements OnInit {
  constructor(private servei: ServeiService) {
  }

  ngOnInit(): void {
    const textEmmagatzemat = this.servei.getText();

    if (textEmmagatzemat) {
      document.getElementById('RebreText')!.innerText = textEmmagatzemat;
    }
  }

}
