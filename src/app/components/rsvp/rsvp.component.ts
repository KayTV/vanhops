import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';

import { FirebaseService } from '../../services/firebase.service';
import { Household } from '../../models/Household';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['../../styles/shared.css']
})

export class RSVPComponent implements OnInit {
  total: number;
  guests: String[];
  rsvp: number;
  id: any;
  answers = [];
  answered: boolean = false;
  household: Household;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.getGuest();
  }

  getGuest() {
    this.firebaseService.getHousehold(this.id)
      .subscribe((household: Household) => {
        console.log(household);
        this.household = household;
        this.guests = household.guests;
        this.rsvp = household.rsvp;
        this.total = household.total;
      });
  }

  updateRsvp(key: string, attending: string){
    this.answers.push({name: key, rsvp: attending});
  }

  submitRsvp(note: string, plusone: string) {
    this.answers.push({note: note}, {plusone: plusone});
    console.log(this.answers);
    this.firebaseService.updateRsvp(this.id, this.answers);
    console.log(note, plusone);
    setTimeout(() => this.redirect(), 500);
  }

  redirect() {
    this.router.navigate(['/rsvp/'+this.id+'/confirm'])
  }
}
