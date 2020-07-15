import { AngularFireDatabase, AngularFireList} from '@angular/fire/database'
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  userList: AngularFireList<any>;
  selectedUser: User = new User();

  constructor(private firebase: AngularFireDatabase) { }

  getUsers() {
    return this.userList = this.firebase.list('users');
  }

  addUser(user: User){
    this.userList.push({
      user_name: user.user_name,
      password: user.password,
      status: user.status,
      role: user.role
    })
  }

  updateUser(user: User){
   this.userList.update(user.$key, {
      user_name: user.user_name,
      password: user.password,
      status: user.status,
      role: user.role
   });
  }

  deleteUser($key: string){
    this.userList.remove($key);
  }

}
