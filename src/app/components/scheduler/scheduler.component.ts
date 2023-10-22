import { Component, OnInit } from '@angular/core';  // Importe OnInit
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {  // Implemente OnInit

  yourForm!: FormGroup;
  previewMessage = '';  // Variável para armazenar a pré-visualização da mensagem

  constructor(private fb: FormBuilder) {}

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
  }

  options: { label: string, value: string }[] = [
    { label: 'Joao', value: 'Joao' },
    { label: 'Maria', value: 'Maria' }
    // ... outras opções
  ];
  options2: { label: string, value: string }[] = [
    { label: 'Boa noite {Cliente}, deseja repetir seu pedido? {Pedido}', value: 'Boa noite {Cliente}, deseja repetir seu pedido? {Pedido}' },
    { label: 'Boa noite! Tudo bem {Cliente} deseja fazer aquele seu pedido novamente? {Pedido}', value: 'Boa noite! Tudo bem {Cliente} deseja fazer aquele seu pedido novamente? {Pedido}' },
    // ... outras opções
  ];
  options3: { label: string, value: string }[] = [
    { label: '1 pizza 3 cocas', value: '1 pizza 3 cocas' },
    { label: '2 pizza 4 cocas', value: '2 pizza 4 cocas' }
    // ... outras opções
  ];

  onSubmit() {
    console.log('Pedido:', this.previewMessage);
  }
}
