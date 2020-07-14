import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.css']
})
export class WishesComponent implements OnInit {

  @Input() showAddWishPanel: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  newWishPanel(valor: boolean) {
    this.showAddWishPanel = valor;
  }
}
