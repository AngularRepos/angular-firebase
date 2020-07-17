import { Component, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isLogged: boolean = false;
  @Input() hideLoginPanel: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showLoginPanel(valor: boolean){
    this.hideLoginPanel = valor;
  }



}
