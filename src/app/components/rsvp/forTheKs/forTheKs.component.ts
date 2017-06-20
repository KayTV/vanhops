import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../../services/firebase.service';
import { Household } from '../../../models/Household';

@Component({
  selector: 'app-root',
  templateUrl: './forTheKs.component.html',
  styleUrls: ['../../../styles/shared.css']
})
export class ForTheKsComponent implements OnInit {
  guests: Household[];
  total: number;
  
  constructor(private firebaseService: FirebaseService) {
    this.total = 0;
  }

  ngOnInit() {
    this.getGuests();
  }

  getGuests() {
    this.firebaseService.getGuests().subscribe(
      guests => this.guests = guests
    )
  }

}
