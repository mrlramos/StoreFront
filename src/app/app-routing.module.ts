import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Project started here
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MessageComponent } from './components/message/message.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrderComponent } from './components/order/order.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mensagem', component: MessageComponent },
  { path: 'cliente', component: CustomerComponent },
  { path: 'pedido', component: OrderComponent },
  { path: 'esqueci-senha', component: ForgotPasswordComponent },
  { path: 'agendador', component: SchedulerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
