import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  userList: User[];
  @Output() showUserPanel = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .snapshotChanges()
      .subscribe(item => {
        this.userList = [];
        item.forEach( element => {
          let u = element.payload.toJSON()
          u["$key"] = element.key;
          this.userList.push(u as User);
        })
      })
  }

  deleteUser($key: string){
    this.userService.deleteUser($key);
  }

  editUser(user: User){
    this.showUserPanel.emit(true);
    this.userService.selectedUser = Object.assign({}, user);
  }

}
