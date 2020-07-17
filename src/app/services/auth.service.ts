import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  loginUser(username: string, pass :string) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(username, pass)
      .then(userData => resolve(userData),
      err =>reject(err));
    })
  }

  loginGoogle(){
    return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider);
  }

  isAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  logOut(){
    return this.afAuth.signOut();
  }
}
