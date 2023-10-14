import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
  }

  onSubmit() {
    console.log('Usuário:', this.username, 'Senha:', this.password);
    // Aqui, você pode adicionar sua lógica de autenticação
  }
}