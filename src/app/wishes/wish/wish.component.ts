import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WishService } from 'src/app/services/wish.service';
import { Wish } from 'src/app/models/wish';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {

  protected owner: String;
  constructor(protected wishService: WishService) { }

  ngOnInit() {
    this.wishService.selectedWish = new Wish();
    this.owner = "owner";
  }

  saveWish(){}

  onSubmit(wishForm: NgForm){
    console.log(wishForm.value);
    if (wishForm.valid){
      if (wishForm.value.$key == null)
        this.wishService.addWish(wishForm.value);
      else {
        console.log("aquí");
        this.wishService.updateWish(wishForm.value);
      }
    } else {
      alert("el formulario no es valido");
    }
  }
}
