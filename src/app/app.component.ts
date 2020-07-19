import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angular-firebase';
  loguedUser: boolean = false;

  constructor(private authService: AuthService,
              private router: Router) {}

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
    this.loguedUser = false;
    localStorage.clear();
    this.router.navigate(['/home'])
  }




}
