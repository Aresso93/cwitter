import { Injectable } from '@angular/core';
import { FirebaseApp } from 'firebase/app';
import { Firestore, collection, getDocs, getFirestore } from "firebase/firestore";
import { FireappService } from './fireapp.service';



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


}
