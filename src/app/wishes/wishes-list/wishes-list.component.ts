import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishService } from 'src/app/services/wish.service';
import { Wish } from 'src/app/models/wish';

@Component({
  selector: 'app-wishes-list',
  templateUrl: './wishes-list.component.html',
  styleUrls: ['./wishes-list.component.css']
})
export class WishesListComponent implements OnInit {

  wishList: Wish[];
  @Output() showWishPanel = new EventEmitter();

  constructor(private wishService: WishService) { }

  ngOnInit() {
    this.wishService.getWishes()
      .snapshotChanges()
      .subscribe(item => {
        this.wishList = [];
        item.forEach( element => {
          let w = element.payload.toJSON()
          w["$key"] = element.key;
          this.wishList.push(w as Wish);
        })
      })
  }

  deleteWish($key: string){
    this.wishService.deleteWish($key);
  }

  editWish(wish: Wish){
    console.log("entro");
    this.showWishPanel.emit(true);
    this.wishService.selectedWish = Object.assign({}, wish);
  }

}
