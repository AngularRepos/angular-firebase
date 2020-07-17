import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() hideLoginPanel= new EventEmitter;
  constructor(private autService: AuthService,
              private afAuth: AngularFireAuth,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(username: string, pass: string){

  }

  loginGoogle(): void {
    this.autService.loginGoogle()
    .then ( res => {
      console.log(res);
      this.router.navigate(['/wishes']);
    }).catch( err => console.log('err', err));
  }


  hideLogPanel(): void {
    this.hideLoginPanel.emit(false);
  }


}
