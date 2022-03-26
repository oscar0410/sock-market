import { Stock } from './../../model/stock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stock: Stock|undefined;
  public stockStyles: any;

  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company','TSC',85,80);
    let largeChange = Math.abs((this.stock.price/this.stock.previousPrice)-1) > 0.01;
    this.stockStyles = {
      "color" : this.stock.isPositiveChange() ? 'green' : 'red',
      "font-size" : largeChange ? '1.2em' : '.8em'
    }
  }

  toggleFavorite(event: any){
    console.log('We are toggling the favorite state for this stock',event);
    if(this.stock){
      this.stock.favorite = !this.stock.favorite
    }
  }

}
