import { Component, OnInit, Output } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //@Output() loguedUser = const name = new type(arguments);
  display = "none";
  showLogin: boolean = false;

  constructor(private modalService: ModalService,
              private router: Router) { }

  ngOnInit() {
  }

  //método temporal para gardar usuario en localstrage
  identificarse(){
    this.modalService.open("custom-modal");
    //this.loguedUser = true;
  }

  onCloseHandled(){
    this.display='none';
  }

  openModal(){
    this.display="block";
  }

  showLoginPanel(){
    if (this.showLogin == false){
      this.showLogin= true;
      localStorage.setItem("isLogged", "true");
    } else {
      this.showLogin= false;
      this.router.navigate(["/home"]);
      console.log(this.showLogin);
    }

  }

}
