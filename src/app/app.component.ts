import { Component } from '@angular/core';
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

  masterKegList: Keg[] = [
    new Keg("Guinness", "Guinness", 6, 4.2, 44, "Irish Stout", "http://www.stickpng.com/assets/images/585e62eecb11b227491c33fb.png"),
    new Keg("Blue Moon", "Blue Moon", 5, 5.4, 9, "Belgian White", "http://static.wixstatic.com/media/3edf8f_c3502d298913457db45a06143aef2ebc.gif"),
    new Keg("Stella Artois", "Anheuser-Busch", 5, 5.0, 24, "European Lager", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Stella_Artois_new_logo.png/1200px-Stella_Artois_new_logo.png"),
    new Keg("Dos Equis", "Cerveceria Cuauhtemoc Moctezuma", 4, 4.5, 10, "American Lager", "http://www.almuerzodenegocios.com/wp-content/uploads/2013/08/Dos-Equis-Logo-Web.png")
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

}
