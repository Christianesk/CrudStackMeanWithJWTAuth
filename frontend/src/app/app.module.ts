import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthGuardService } from './services/authentication/auth-guard.service';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'login', component: UsersComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'product', component: ProductsComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UsersComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    AuthenticationService,
    AuthGuardService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
