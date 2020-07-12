import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'angular-firebase';
  loguedUser: boolean = false;

  constructor() {}
  ngOnInit(): void {
/*     if (localStorage.getItem("userId") == null)
      this.loguedUser = false;
    else
      this.loguedUser = true; */
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (localStorage.getItem("userId") == null)
      this.loguedUser = false;
    else
      this.loguedUser = true;
  }




}
