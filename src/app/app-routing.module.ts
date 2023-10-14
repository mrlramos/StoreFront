import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Project started here
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MessageComponent } from './components/message/message.component';
import { CustomerComponent } from './components/customer/customer.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'message', component: MessageComponent },
  { path: 'customer', component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
