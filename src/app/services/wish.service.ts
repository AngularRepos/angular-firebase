import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Wish } from '../models/wish';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WishService {

  wishList: AngularFireList<any>;
  selectedWish: Wish = new Wish();

  constructor(private firebase: AngularFireDatabase) { }

  getWishes() {
    return this.wishList = this.firebase.list('wishes');
  }

  addWish(wish: Wish){
    this.wishList.push({
      wish_name: wish.wish_name,
      description: wish.description,
      owner: wish.owner
    });
  }

  updateWish(wish: Wish){
    this.wishList.update(wish.$key, {
      wish_name: wish.wish_name,
      description: wish.description,
      owner: wish.owner
   });
  }

  deleteWish($key: string){
    this.wishList.remove($key);
  }

}
