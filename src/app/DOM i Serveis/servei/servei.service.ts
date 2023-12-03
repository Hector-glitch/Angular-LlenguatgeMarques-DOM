import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeiService {
  textVariable: string = '';

  constructor() {
  }
  getText(): string {
    return this.textVariable;
  }

  // Mètode per assignar el text
  setText(text: string): void {
    this.textVariable = text;
  }
}
