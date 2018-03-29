import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './models/keg.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Epicodus Taproom';
  employeeView: boolean = false;
  viewButtonText: string = "Employee View";
  selectedKeg: Keg;
  blurbFiller: string = "Lorem ipsum dolor sit amet, ut illud putent deterruisset vis. Laoreet invenire consequat te vis, quas laudem pertinax pri ea. Cibo justo per et, ne case fuisset salutandi has.";

  masterKegList: Keg[] = [
    new Keg("Guinness", "Guinness", 6, 4.2, 44, "Irish Stout", "http://www.stickpng.com/assets/images/585e62eecb11b227491c33fb.png", this.blurbFiller),
    new Keg("Blue Moon", "Blue Moon", 5, 5.4, 9, "Belgian White", "http://static.wixstatic.com/media/3edf8f_c3502d298913457db45a06143aef2ebc.gif", this.blurbFiller),
    new Keg("Stella Artois", "Anheuser-Busch", 5, 5.0, 24, "European Lager", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Stella_Artois_new_logo.png/1200px-Stella_Artois_new_logo.png", this.blurbFiller),
    new Keg("Dos Equis", "Cerveceria Cuauhtemoc Moctezuma", 3, 4.5, 10, "American Lager", "http://www.almuerzodenegocios.com/wp-content/uploads/2013/08/Dos-Equis-Logo-Web.png", this.blurbFiller),
    new Keg("Missy's Own", "Missy's Own", 10, 20, 2, "Really Really Hot", "https://static.stereogum.com/uploads/2015/03/missyelliott-640x640.jpg", "Treat yourself to some of Missy's Own, a brand of alcohol made in the early 2000s by famous rapper Missy Elliot.")
  ];

  setEmployeeView() {
    this.employeeView = !this.employeeView;
    if (this.employeeView) {
      this.viewButtonText = "Patron View";
    } else {
      this.viewButtonText = "Employee View";
    }
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  makeSale(saleArray) {
    this.selectedKeg = saleArray[0];
    console.log(saleArray[0]);
    let index = this.masterKegList.indexOf(this.selectedKeg);
    if (this.selectedKeg.pints >= saleArray[1]) {
      this.selectedKeg.pints = this.selectedKeg.pints - saleArray[1];
    }
    this.masterKegList[index] = this.selectedKeg;
  }

  removeKeg(clickedKeg) {
    let index = this.masterKegList.indexOf(clickedKeg);
    this.masterKegList.splice(index, 1);
  }

  updateMasterWithNewKeg(newKeg) {
    this.masterKegList.push(newKeg);
  }
}
