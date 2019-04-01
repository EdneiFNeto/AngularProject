import { VerifyUserService } from './../verify-user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any;
  senha: any;
  user: any;
  message: any;

  constructor(private router: Router, private verifyUser: VerifyUserService) { }

  ngOnInit() {
    this.verifyUser.removeSession();
  }

  logar(): void {
    this.verifyUser.authUser(this.email);
    this.message = this.verifyUser.message;
  }

}
