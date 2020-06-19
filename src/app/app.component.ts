import { Item } from './models/item';
import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'equipment-app';
  itemsArray: Item[];
  itemSelected: Item;
  amountPrize: number = 0;

  constructor(private items: DataService) { }

  ngOnInit(): void {
    this.getItems();
    this.getPrizesValue();
    this.getItem(1);
  }

  getItem(id: number): void {
    this.items.getItem(id).then(item => this.itemSelected = item);
  }

  getItems(): void {
    this.items.getItems().then(items => this.itemsArray = items);
  }

  getPrizesValue(): void {
    this.items.countAmountPrize().then(value => this.amountPrize = value);
  }

  selectItem(id: number) {
    this.getItem(id);
  }
}
