import { Stock } from './../../model/stock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stock: Stock|undefined;

  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company','TSC',85,80);
  }

  toggleFavorite(event: any){
    console.log('We are toggling the favorite state for this stock',event);
    if(this.stock){
      this.stock.favorite = !this.stock.favorite
    }
  }

}
