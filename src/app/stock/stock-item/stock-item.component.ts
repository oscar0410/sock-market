import { Stock } from './../../model/stock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stocks: Array<Stock>|undefined;

  constructor() { }

  ngOnInit(): void {
    this.stocks = [
      new Stock('Test Stock Company','TSC',85,80),
      new Stock('Second Stock Company','SSC',10,20),
      new Stock('Last Stock Company','LSC',876,765)
  ];
  }

  toggleFavorite(event: any, index: any){
    console.log('We are toggling the favorite state for this stock',event);
    if(this.stocks){
      this.stocks[index].favorite = !this.stocks[index].favorite
    }
  }

}
