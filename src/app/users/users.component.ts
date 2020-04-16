import { Component, OnInit, Input } from '@angular/core';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() showUserPanel: boolean;
  showAddUserButton: boolean;

  constructor() { }

  ngOnInit() {
    this.showAddUserButton = true;
  }

  showPanel(valor: boolean) {
    this.showUserPanel = valor;
    this.showAddUserButton=!valor;
}

}
