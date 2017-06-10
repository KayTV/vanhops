import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Party } from '../models/Party';
import { Registry } from '../models/Registry';
import { Bridal } from '../models/Bridal';
import { Household } from '../models/Household';

@Injectable()
export class FirebaseService {
  bridesmaids: FirebaseListObservable<Party[]>;
  groomsmen: FirebaseListObservable<Party[]>;
  registry: FirebaseListObservable<Registry[]>;
  bridalGuests: FirebaseListObservable<Bridal[]>;
  household: FirebaseObjectObservable<Household>;
  rsvp: {
    name: string;
    rsvp: string;
  }

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

  getHousehold(index:number) {
    this.household = this.af.database.object('/households/'+index) as
    FirebaseObjectObservable<Household>
    return this.household;
  }

  updateRsvp(index: number, answers: any) {
    this.household = this.af.database.object('/households/'+index+'/rsvp') as
    FirebaseObjectObservable<Household>
    this.household.set({answers: answers});
  }
}
