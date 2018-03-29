export class Keg {
  public pints: number;
  public percentage: string;
  constructor(public name: string, public brand: string, public price: number, public abv: number, public ibu: number, public type: string, public logo: string, public blurb: string) {
    this.pints = 124;
    this.percentage = "height: " + (this.pints/124)*100 + "%;";
  };
}
