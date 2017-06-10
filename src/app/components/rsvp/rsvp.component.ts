import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';

import { FirebaseService } from '../../services/firebase.service';
import { Household } from '../../models/Household';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['../../styles/shared.css']
})

export class RSVPComponent {
  total: number;
  guests: String[];
  rsvp: number;
  id: any;
  answers = [];
  answered: boolean = false;

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
        this.guests = household.guests;
        this.rsvp = household.rsvp;
        this.total = household.total;
        console.log(this.guests);
      });
  }

  updateRsvp(key: string, attending: string){
    this.answers.unshift({name: key, rsvp: attending});
    // this.answered = true;
    console.log(this.answers);
    this.firebaseService.updateRsvp(this.id, this.answers);
  }

  redirect() {
    this.router.navigate(['/rsvp/confirm'])
  }
}
