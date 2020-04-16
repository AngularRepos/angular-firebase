import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() hideUserPanel = new EventEmitter;

  constructor(protected userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers();
  }


  onSubmit(userForm: NgForm){
    if (userForm.valid){
      if (userForm.value.$key == null)
        this.userService.addUser(userForm.value);
      else {
        console.log("aquí");
        this.userService.updateUser(userForm.value);
      }
    } else {
      alert("el formulario no es valido");
    }
  }

  hidePanel(): void {
    this.hideUserPanel.emit(false);
    this.userService.selectedUser= new User();
  }

}
