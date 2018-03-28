import { Component } from '@angular/core';
import { Keg } from './models/keg.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Epicodus Taproom';

  masterKegList: Keg[] = [
    new Keg("Guinness", "Guinness", 6, 4.2, 44, "Irish Stout"),
    new Keg("Blue Moon", "Blue Moon", 5, 5.4, 9, "Belgian White"),
    new Keg("Stella Artois", "Anheuser-Busch", 5, 5.0, 24, "European Lager"),
    new Keg("Dos Equis", "Cerveceria Cuauhtemoc Moctezuma", 4, 4.5, 10, "American Lager")
  ];

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
