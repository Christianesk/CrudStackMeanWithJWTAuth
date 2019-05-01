import { Component} from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../services/authentication/authentication.service';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  /*selector: 'app-register-user',*/
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}


  register() {
    this.auth.register(this.credentials).subscribe(() => {
      M.toast({ html: 'Te has registrado correctamente', classes: 'rounded green' });
      this.router.navigateByUrl('/login');
    }, (err) => {
      M.toast({ html: err.error.message, classes: 'rounded red' });
    });
  }

}
