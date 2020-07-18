import { Component, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogged: boolean = false;
  @Input() hideLoginPanel: boolean = false;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  showLoginPanel(valor: boolean){
    this.hideLoginPanel = valor;
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe( auth => {
      if(auth){
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    })
  }



}
