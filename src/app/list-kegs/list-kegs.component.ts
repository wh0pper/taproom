import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-list-kegs',
  templateUrl: './list-kegs.component.html',
  styleUrls: ['./list-kegs.component.css']
})
export class ListKegsComponent{
  @Input() childKegList: Keg[];

  colorCodePrice(currentKeg) {
    if (currentKeg.price === 6) {
      return "highPrice";
    } else if (currentKeg.price === 5) {
      return "midPrice";
    } else {
      return "lowPrice";
    }
  }

}
