import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angular-firebase';
  loguedUser: boolean = false;

  constructor(private authService: AuthService,
              private afAuth: AngularFireAuth) {}

  ngOnInit(): void{
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe( auth => {
      if(auth){
        this.loguedUser = true;
      } else {
        this.loguedUser = false;
      }
    })
  }

  logOut(){
    this.authService.logOut();
    localStorage.clear();
  }




}
