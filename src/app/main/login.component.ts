import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  protected email: string = "";
  protected pass: string = "";
  @Output() hideLoginPanel= new EventEmitter;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.authService.loginUser(this.email, this.pass)
    .then(
      res => {
        this.redirectOnLogin();
        this.hideLogPanel();
    }).catch(
      err => this.showErrorOnLogin(err));
  }

  loginGoogle(): void {
    this.authService.loginGoogle()
    .then ( res =>{
      this.redirectOnLogin();
    }).catch( err => this.showErrorOnLogin(err));
  }


  hideLogPanel(): void {
    this.hideLoginPanel.emit(false);
  }

  redirectOnLogin(): void {
    localStorage.setItem("loguedUser", "true");
    this.router.navigate(['/wishes']);
  }

  showErrorOnLogin(err: String) {
    console.error( err);
  }


}
