import { VerifyUserService } from './../verify-user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  constructor(private service: VerifyUserService, private router:Router) {
    
  }

  ngOnInit() {
    this.loadStorage();
  }

  loadStorage():void {
    console.log("Select user: "+this.service.selectUser());
    if (this.service.selectUser() != null) {
      this.user = this.service.selectUser();
    } else {
      this.service.removeSession();
      this.router.navigate(["login"]);
    }
  }

}
