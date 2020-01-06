import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { BusInterface } from '../models/busInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusesService {
  busesCollection: AngularFirestoreCollection<BusInterface>;
  buses: Observable<BusInterface[]>;
  busesDoc: AngularFirestoreDocument<BusInterface>;

  constructor(public afs: AngularFirestore) { 
    // this.buses = afs.collection('buses').valueChanges();
    this.busesCollection = afs.collection<BusInterface>('buses', ref => ref.orderBy('date', 'desc'));
    this.buses = this.busesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as BusInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

   getBuses() {
     return this.buses;
   }

   addBus(bus: BusInterface) {
     console.log('New Bus');
     this.busesCollection.add(bus);
   }
   deleteBus(bus: BusInterface) {
     this.busesDoc = this.afs.doc(`buses/${bus.id}`);
     this.busesDoc.delete();
   }
   updateBus(bus: BusInterface) {
    this.busesDoc = this.afs.doc(`buses/${bus.id}`);
    this.busesDoc.update(bus);
   }
}
