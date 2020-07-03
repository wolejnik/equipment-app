import { Item } from './models/item';
import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Type } from './models/type.enum';
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
    console.log(this.itemSelected)
  }

  deleteItem(id: number) {
    this.itemsArray = this.itemsArray.filter(item => id !== item.id);
    this.itemsArray.push({
      id: Math.floor(Math.random() * 9999) + 1000,
      name: `Prize-${Math.floor(Math.random() * 99) + 10}`,
      type: Type.Prize,
      price: Math.floor(Math.random() * 9999) + 1000,
      img: '../../assets/sample-reward.png',
      key: `798-A5A-${Math.floor(Math.random() * 9999) + 1000}-ZXC`
    });
    this.getItem(this.itemsArray[0].id);
    console.log('this.item', this.itemsArray);
  }
}
