import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import * as firebase from 'firebase';
//import { Observable } from 'rxjs';
import { AppUser } from './models/app-user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
// users :Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User){
    // this.users = this.db.collection('users').valueChanges(); 
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }
  get(uid:string):AngularFireObject<AppUser>{
    return this.db.object('/users/'+ uid)
  }
}
