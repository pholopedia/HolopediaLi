import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Hologram } from './hologram.model';

@Injectable({
  providedIn: 'root'
})
export class HologramsService {

  collection: AngularFirestoreCollection<Hologram>;
  holograms: Observable<Hologram[]>;
  document: AngularFirestoreDocument<Hologram>;
  afs$: AngularFirestore;
  collectionName: string = 'holograms';

  constructor(
    public afs: AngularFirestore,
  ) {
    this.afs$ = afs;
    this.get();
  }

  get() {
    this.collection = this.afs$.collection<Hologram>(this.collectionName);
    this.holograms = this.collection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Hologram;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
    return this.holograms;
  }

  add(hologram: Hologram){
    let promise = new Promise((resolve, reject) => {
      this.collection.add(hologram)
      .then((data) => { resolve(data); })
      .catch(error => reject(error) );
    });
    return promise;
  }

  update(hologram: Hologram) {
    this.document = this.afs.doc<Hologram>(this.collectionName + "/" + hologram.id);
    this.document.update(hologram);
  }

  delete(hologram: Hologram){
    this.document = this.afs.doc<Hologram>(this.collectionName + "/" + hologram.id);
    this.document.delete();
  }

}
