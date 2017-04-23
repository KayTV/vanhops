import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Party } from '../models/Party';
import { Registry } from '../models/Registry';
import { Bridal } from '../models/Bridal';

@Injectable()
export class FirebaseService {
  bridesmaids: FirebaseListObservable<Party[]>;
  groomsmen: FirebaseListObservable<Party[]>;
  registry: FirebaseListObservable<Registry[]>;
  bridalGuests: FirebaseListObservable<Bridal[]>;

  constructor(private af: AngularFire) { }

  getBridesmaids() {
    this.bridesmaids = this.af.database.list('/party/bridesmaids') as
    FirebaseListObservable<Party[]>
    return this.bridesmaids;
  }

  getGroomsmen() {
    this.groomsmen = this.af.database.list('/party/groomsmen') as
    FirebaseListObservable<Party[]>
    return this.groomsmen;
  }

  getRegistry() {
    this.registry = this.af.database.list('/registry') as
    FirebaseListObservable<Registry[]>
    return this.registry;
  }

  addBridalGuest(name: string, attending: string, notes: string) {
    this.bridalGuests = this.af.database.list('/bridal') as
    FirebaseListObservable<Bridal[]>
    this.bridalGuests.push({name: name, attending: attending, notes: notes});
  }

  getBridalGuests() {
    this.bridalGuests = this.af.database.list('/bridal') as
    FirebaseListObservable<Bridal[]>
    return this.bridalGuests;
  }
}
