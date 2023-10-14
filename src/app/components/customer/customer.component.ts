import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  customer = {
    name: '',
    cpfCnpj: '',
    cellphone: '',
    address: {
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      postalCode: ''
    }
  };

  constructor() {}

  onSubmit() {
    console.log('Dados do cliente:', this.customer);
  }
}
