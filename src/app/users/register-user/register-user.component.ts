import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  protected email: string = "";
  protected pass: string = "";

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  addUser() {
    this.authService.registerUser(this.email, this.pass)
    .then ( res =>{
      this.redirectOnLogin();
    }).catch( err => this.showErrorOnLogin(err));
  }

  redirectOnLogin() {
    localStorage.setItem("loguedUser", "true");
    this.router.navigate(['/wishes']);
  }

  showErrorOnLogin(err: String) {
    console.error( err);
  }

}
