import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Hologram } from './hologram.model';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class HologramsService {

  collection: AngularFirestoreCollection<Hologram>;
  holograms: Observable<Hologram[]>;
  afs$: AngularFirestore;
  hologramsCollectionName: string = 'holograms';
  categoriesCollectionName: string = 'hologramCategories';
  isFullscreen: boolean = false;

  public get Sources(): string[] { return [
    'YouTube',
    'Vimeo',
    'Website'
  ]};

  constructor(
    public afs: AngularFirestore,
    public firestoreService: FirestoreService
  ) {
    this.afs$ = afs;
    this.get();
  }

  get() {
    this.collection = this.afs$.collection<any>(this.hologramsCollectionName);
    this.holograms = this.firestoreService.get(this.collection);
    return this.holograms;
  }

  add(hologram: Hologram){
    return this.firestoreService.add(this.collection, hologram);
  }

  update(hologram: Hologram) {
    this.firestoreService.update(hologram, this.hologramsCollectionName);
  }

  delete(hologram: Hologram){
    this.firestoreService.delete(hologram, this.hologramsCollectionName);
  }

}
