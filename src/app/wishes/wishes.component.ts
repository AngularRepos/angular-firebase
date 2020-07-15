import { Component, OnInit, Input } from '@angular/core';

@Component({
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.css']
})
export class WishesComponent implements OnInit {

  @Input() showWishPanel: boolean = false;
  showAddWishButton: boolean = true;

  constructor() { }

  ngOnInit() { }

  showPanel(valor: boolean) {
    this.showWishPanel = valor;
    this.showAddWishButton=!valor;
  }

}
