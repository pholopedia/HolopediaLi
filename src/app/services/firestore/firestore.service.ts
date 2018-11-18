import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  items: Observable<any[]>;
  afs$: AngularFirestore;

  constructor(
    public afs: AngularFirestore,
  ) {
    this.afs$ = afs;
   }

  get(collection: AngularFirestoreCollection<any>) {
    return collection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as any;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }

  add(collection: AngularFirestoreCollection<any>, item: any){
    return new Promise((resolve, reject) => {
      collection.add(item)
      .then((data) => { resolve(data); })
      .catch(error => reject(error) );
    });
  }

  update(item: any, collectionName: string) {
    this.afs.doc<any>(collectionName + "/" + item.id).update(item);
  }

  delete(item: any, collectionName: string){
    this.afs.doc<any>(collectionName + "/" + item.id).delete();
  }
}
