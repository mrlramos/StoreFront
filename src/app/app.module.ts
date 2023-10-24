import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

//Project started here
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MessageComponent } from './components/message/message.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrderComponent } from './components/order/order.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';

import { ReactiveFormsModule } from '@angular/forms';  // Importe ReactiveFormsModule e FormsModule
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MessageComponent,
    HeaderComponent,
    FooterComponent,
    CustomerComponent,
    OrderComponent,
    ForgotPasswordComponent,
    SchedulerComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  // Adicione ReactiveFormsModule
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
