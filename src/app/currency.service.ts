import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http:HttpClient) { }


  getData(fromCurrency:string, toCurrency:string) {
    let url = `https://free.currconv.com/api/v7/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=924b646db97f8821a0fd`;
    return this.http.get(url);
  }

}
