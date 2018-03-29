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
  @Output() editKeg = new EventEmitter();
  @Output() sellKeg = new EventEmitter();
  @Output() removeKeg = new EventEmitter();

  public edit: Keg = null;
  public sell: Keg = null;

  colorCodePrice(currentKeg) {
    if (currentKeg.price === 6) {
      return "highPrice";
    } else if (currentKeg.price === 5) {
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
    this.sell = currentKeg;
    this.sellKeg.emit(currentKeg);
  }

  clickRemove(currentKeg) {
    this.removeKeg.emit(currentKeg);
  }

}
