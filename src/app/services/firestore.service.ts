import { Injectable } from '@angular/core';
import { FirebaseApp } from 'firebase/app';
import { Firestore, collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { FireappService } from './fireapp.service';
import { OurUser } from '../model/user';



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  db: Firestore;

  constructor(private fireApp: FireappService) {
    this.db = getFirestore(fireApp.app)
  }

    // initDb(app :any){
    //   this.db = getFirestore(app);

    // }

    getCwits() {
     const coll = collection(this.db, 'cwit');
     return getDocs(coll).then(snap => snap.docs.map(doc => doc.data()
     ));

    }


    postOurUser(ourUser: OurUser, uid: string){
      const docUrl = doc(this.db, 'users', uid);
      return setDoc(docUrl, ourUser)
    }

    getOurUser(uid: string){
      const docUrl = doc(this.db, 'users', uid);
      return getDoc(docUrl)
    }


}
