import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sell-keg',
  templateUrl: './sell-keg.component.html',
  styleUrls: ['./sell-keg.component.css']
})
export class SellKegComponent {
  @Output() sendSale = new EventEmitter();

  submitForm(type: string, quantity: string) {
    let number = parseInt(quantity) * parseInt(type);
    this.sendSale.emit(number);
  }
}
