import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../../services/firebase.service';
import { Household, Answers } from '../../../models/Household';

@Component({
  selector: 'app-root',
  templateUrl: './forTheKs.component.html',
  styleUrls: ['../../../styles/shared.css']
})
export class ForTheKsComponent implements OnInit {
  guests: Household[];
  total: number;
  yes: number;
  no: number;
  noResponse: number;

  constructor(private firebaseService: FirebaseService) {
    this.total = 0;
    this.yes = 0;
    this.no = 0
    this.noResponse = 0;
  }

  ngOnInit() {
    this.getGuests();
  }

  getGuests() {
    this.firebaseService.getGuests().subscribe(
      guests => {
        this.guests = guests
        this.guests.forEach((guest:Household) =>{
          if(guest.answers){
            guest.answers.forEach((answer:Answers) => {
              if(answer.rsvp == "Yes"){
                this.yes++;
                console.log('yes', this.yes, answer.name);
              } else if (answer.rsvp == "No"){
                this.no++;
                console.log('no', this.no, answer.name);
              } else if (answer.plusone) {
                this.yes++;
                console.log('plus1', this.yes, answer.plusone)
              }
            });
          } else {
            this.noResponse += +guest.guests.length;
            if(guest.plus1){
              this.noResponse++;
            }
          }
          if(guest.total){
            this.total += +guest.guests.length;
          }
          if(guest.plus1){
            this.total++;
          }
        });
    });
  }

}
