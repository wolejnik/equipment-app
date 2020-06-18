import { Type } from './type.enum';

export class Item {
    id: number;
    name: string;
    type: Type;
    price: number;
    img: string;
    key?: string;
}
