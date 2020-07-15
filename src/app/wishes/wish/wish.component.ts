import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() hideWishPanel = new EventEmitter;

  constructor(protected wishService: WishService) { }

  ngOnInit() {
    this.wishService.getWishes();
    this.owner = "owner";
  }

  onSubmit(wishForm: NgForm){
    if (wishForm.valid){
      if (wishForm.value.$key == null){
        this.wishService.addWish(wishForm.value);
        this.hidePanel();
      } else {
        this.wishService.updateWish(wishForm.value);
        this.hidePanel();
      }
    } else {
      alert("el formulario no es valido");
    }
  }
  hidePanel(): void {
    this.hideWishPanel.emit(false);
    this.wishService.selectedWish = new Wish();
  }
}
