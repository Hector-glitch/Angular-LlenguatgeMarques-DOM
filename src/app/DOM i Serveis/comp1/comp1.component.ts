import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
// @ts-ignore
import {yellowSubmarine, changeSize, countWords} from './function.js';


@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component implements OnInit {

  constructor() {}

  ngOnInit(): void {

    yellowSubmarine();
    changeSize();
    countWords();

    let nodeTitol = document.getElementById('titol');
    // @ts-ignore
    nodeTitol.textContent = nodeTitol.textContent.toUpperCase() ;
    // @ts-ignore
    document.getElementById('url').textContent = document.URL;

    let imgElement = document.getElementById('imatge') as HTMLImageElement;
    imgElement.src = 'https://img.freepik.com/vector-gratis/hermosa-casa_24877-50819.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699401600&semt=ais';
  }
}
