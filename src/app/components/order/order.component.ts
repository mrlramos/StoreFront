import { Component } from '@angular/core';

interface Item {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  newItem: Item = {
    name: '',
    price: 0,
    quantity: 0
  };

  order = {
    items: [] as Item[]
  };

  constructor() {}

  addItem() {
    this.order.items.push({ ...this.newItem });
    this.newItem = {
      name: '',
      price: 0,
      quantity: 0
    };
  }

  onSubmit() {
    console.log('Pedido:', this.order);
  }
}
