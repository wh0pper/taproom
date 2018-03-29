import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent {
  @Output() newKegEmitter = new EventEmitter();
  submitNewKegInfo(name, brand, price, abv, ibu, type, imageURL, blurb) {
    let newKeg = new Keg(name, brand, parseInt(price), parseInt(abv), parseInt(ibu), type, imageURL, blurb);
    this.newKegEmitter.emit(newKeg);
  }

}
