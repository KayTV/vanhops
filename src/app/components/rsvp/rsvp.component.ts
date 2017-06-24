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
  maritalStatus = { status: 'Nothing selected' };
  statuses: string[] = [
    "Game On! I'll be there!",
    "Game Over, can't make it..."
  ];

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
        this.household = household;
        this.guests = household.guests;
        this.rsvp = household.rsvp;
        this.total = household.total;
      });
  }

  updateRsvp(key: string, attending: string, event){
    let exists = false;
    if (attending === "Game On! I'll be there!") {
      attending = 'Yes'
    }
    if (attending === "Game Over, can't make it...") {
      attending = 'No'
    }
    this.answers.forEach((guest) => {
      if(guest.name==key){
        guest.rsvp = attending;
        exists = true;
      }
    });
    if(!exists){
      this.answers.push({name: key, rsvp: attending});
    }
  }

  submitRsvp(note: string, plusone: string) {
    this.answers.push({note: note}, {plusone: plusone});
    this.firebaseService.updateRsvp(this.id, this.answers);
    setTimeout(() => this.redirect(), 500);
  }

  redirect() {
    this.router.navigate(['/rsvp/'+this.id+'/confirm'])
  }
}
