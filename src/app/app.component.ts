import { Component } from '@angular/core';
import {CurrencyService} from './currency.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currencyConverter';
  currencyValue = 1;
  selected = 'EUR';
  converted = 406;
  selected1 = 'NGN'
  rate:any = '';
  test = false;
  equal = false;

  constructor (private currency:CurrencyService) { }

  getTest() {
    if (this.selected === this.selected1) {
      this.equal = true;
    } else {
      this.currency.getData(this.selected, this.selected1).subscribe(data => {
        this.rate = Object.values(data);
        this.converted = this.currencyValue * this.rate[0];
        this.test = true;
        this.equal = false;
      })
    }
    
  }
  
  
}
