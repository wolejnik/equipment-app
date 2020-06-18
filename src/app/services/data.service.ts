import { Type } from './../models/type.enum';
import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getItems(): Promise<Item[]> {
    return new Promise((resolve) => {
      resolve(chests);
    });
  }

  getItem(id: number): Promise<Item> {
    return this.getItems().then(items => items.find(item => item.id === id));
  }

  countAmountPrize(): Promise<number> {
    let prizeValue = 0;
    chests.forEach(item => {
      if (item.type === 2) {
        prizeValue += item.price;
      }
    });
    return new Promise((resolve) => {
      resolve(prizeValue);
    });
  }

}

export const chests: Item[] = [
  {
    id: 1,
    name: 'Chest-1',
    type: Type.Chest,
    price: 100.5,
    img: '../../assets/sample-chest.png',
  },
  {
    id: 2,
    name: 'Chest-2',
    type: Type.Chest,
    price: 123.5,
    img: '../../assets/sample-chest.png',
  },
  {
    id: 3,
    name: 'Chest-3',
    type: Type.Chest,
    price: 100,
    img: '../../assets/sample-chest.png',
  },
  {
    id: 4,
    name: 'Chest-4',
    type: Type.Chest,
    price: 50.55,
    img: '../../assets/sample-chest.png',
  },
  {
    id: 11,
    name: 'Rune-1',
    type: Type.Rune,
    price: 100.5,
    img: '../../assets/dagaz-2644493_640.png',
  },
  {
    id: 12,
    name: 'Run-2',
    type: Type.Rune,
    price: 123.5,
    img: '../../assets/dagaz-2644493_640.png',
  },
  {
    id: 13,
    name: 'Run-3',
    type: Type.Rune,
    price: 100,
    img: '../../assets/dagaz-2644493_640.png',
  },
  {
    id: 111,
    name: 'Prize-1',
    type: Type.Prize,
    price: 100.5,
    img: '../../assets/sample-reward.png',
    key: '56M-213-5G5-4LO'
  },
  {
    id: 222,
    name: 'Prize-2',
    type: Type.Prize,
    price: 123.5,
    img: '../../assets/sample-reward.png',
    key: 'AS0-3C1-HKJ-TYU'
  },
  {
    id: 333,
    name: 'Prize-3',
    type: Type.Prize,
    price: 100,
    img: '../../assets/sample-reward.png',
    key: 'UYB-6B3-0M1-VBN'
  },
  {
    id: 444,
    name: 'Prize-4',
    type: Type.Prize,
    price: 100,
    img: '../../assets/sample-reward.png',
    key: '999-ZXC-111-ZXC'
  },
  {
    id: 555,
    name: 'Prize-5',
    type: Type.Prize,
    price: 100,
    img: '../../assets/sample-reward.png',
    key: '224-A5A-896-ZXC'
  },
  {
    id: 666,
    name: 'Prize-6',
    type: Type.Prize,
    price: 100,
    img: '../../assets/sample-reward.png',
    key: '798-A5A-13S-ZXC'
  }
];
