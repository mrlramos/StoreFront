import { Component, OnInit } from '@angular/core';  
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { SchedulerService } from 'src/app/services/scheduler/scheduler.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {  // Implemente OnInit

  yourForm!: FormGroup;
  previewMessage = '';  // Variável para armazenar a pré-visualização da mensagem
  customerList!: Observable<{ ok: string; }>;

  constructor(private fb: FormBuilder,
    private customerService: CustomerService,
    private schedulerService: SchedulerService) {}

  ngOnInit(): void {
    this.yourForm = this.fb.group({
      cliente: [null],
      mensagem: [null],
      pedido: [null]
    });
    // Atualizar a pré-visualização da mensagem sempre que os valores do formulário mudarem
    this.yourForm.valueChanges.subscribe(values => {
      const { cliente, mensagem, pedido } = values;
      if (cliente && mensagem && pedido) {
        this.previewMessage = mensagem.replace('{Cliente}', cliente).replace('{Pedido}', pedido);
      }
    });

    this.customerList = this.customerService.getCustomer();
  }

  options: { label: string, value: string }[] = [
    { label: 'Joao', value: 'Joao' },
    { label: 'Maria', value: 'Maria' }
  ];
  options2: { label: string, value: string }[] = [
    { label: 'Boa noite {Cliente}, deseja repetir seu pedido? {Pedido}', value: 'Boa noite {Cliente}, deseja repetir seu pedido? {Pedido}' },
    { label: 'Boa noite! Tudo bem {Cliente} deseja fazer aquele seu pedido novamente? {Pedido}', value: 'Boa noite! Tudo bem {Cliente} deseja fazer aquele seu pedido novamente? {Pedido}' },
  ];
  options3: { label: string, value: string }[] = [
    { label: '1 pizza 3 cocas', value: '1 pizza 3 cocas' },
    { label: '2 pizza 4 cocas', value: '2 pizza 4 cocas' }
  ];

  onSubmit() {
    console.log('Pedido:', this.previewMessage);

    const formData = new FormData();

    const { cliente, mensagem, pedido } = this.yourForm.value;

    console.log(cliente);
    console.log(mensagem);
    console.log(pedido);


    formData.append('cliente', cliente);
    formData.append('mensagem', mensagem);
    formData.append('pedido', pedido);
    formData.append('previewMessage', this.previewMessage);

    this.schedulerService.postSchudeler(formData).subscribe({
      next: response => {
        console.log('Scheduler Sucessful', response.ok);
      },
      error: error => {
        console.log('Scheduler failed');
      },
    });
  }
}
