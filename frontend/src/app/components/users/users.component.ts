import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../services/authentication/authentication.service';
import { Router } from '@angular/router';

declare var M: any;


@Component({
  /*selector: 'app-users',*/
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit { 

  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {
  }

  login() {
    this.auth.login(this.credentials).subscribe((res) => {
      this.router.navigateByUrl('/product');
      M.toast({ html: 'Welcome '+this.auth.getUserDetails().name, classes: 'rounded green' });
    }, (err) => {
      M.toast({ html: err.error.message, classes: 'rounded red' });
    }); 
  }

}
