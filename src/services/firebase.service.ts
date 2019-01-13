import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afAuth: AngularFireAuth) {
    // this.afAuth.authState.subscribe(auth => console.log(auth));
  }

  login(email: string, password: string) {
    return new Promise((resolove, reject) => {
      this.afAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then(userData => resolove(userData), err => reject(err));
    });
  }


  logout() {
    this.afAuth.auth.signOut();
  }

}
