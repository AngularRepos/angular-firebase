import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../../main/home.component';

@Component({
  providers: [HomeComponent],
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent implements OnInit {

  display="none";

  constructor(private home: HomeComponent) { }

  onCloseHandled(){
    this.home.showLoginPanel();
  }

  openModal(){
    alert("hola");
    this.display="block";
  }

  ngOnInit() {
    this.display="block";
  }

}
