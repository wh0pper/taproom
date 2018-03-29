import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-list-kegs',
  templateUrl: './list-kegs.component.html',
  styleUrls: ['./list-kegs.component.css']
})
export class ListKegsComponent{
  @Input() childKegList: Keg[];
  @Input() employeeView: boolean;
  @Input() newKeg: Keg;
  @Output() editKeg = new EventEmitter();
  @Output() sendSaleInfo = new EventEmitter();
  @Output() removeKeg = new EventEmitter();
  @Output() sendNewKegToApp = new EventEmitter();

  public edit: Keg = null;
  public sell: Keg = null;
  public newKegToPopulate: boolean = false;

  colorCodePrice(currentKeg) {
    if (currentKeg.price >= 7) {
      return "highPrice";
    } else if (currentKeg.price >= 4) {
      return "midPrice";
    } else {
      return "lowPrice";
    }
  }

  clickEditKeg(currentKeg) {
    this.sell = null;
    if (this.edit == currentKeg) this.edit = null;
    else this.edit = currentKeg;
    this.editKeg.emit(this.edit);
  }

  clickSell(currentKeg) {
    this.edit = null;
    if (this.sell == currentKeg) this.sell = null;
    else this.sell = currentKeg;
  }

  makeSale(number) {
    let saleArray = [];
    saleArray.push(this.sell);
    saleArray.push(number);
    this.sendSaleInfo.emit(saleArray);
  }

  clickRemove(currentKeg) {
    this.removeKeg.emit(currentKeg);
  }

  newKeg() {
    this.newKegToPopulate = true;
  }

  populateNewKegInfo(newKeg) {
    this.childKegList.push(newKeg);
    this.sendNewKegToApp.emit(newKeg);
  }

}
