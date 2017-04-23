import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../../services/firebase.service';
import { Bridal } from '../../../models/Bridal';

@Component({
  selector: 'app-root',
  templateUrl: './forLisa.component.html',
  styleUrls: ['../../../styles/shared.css']
})
export class ForLisaComponent implements OnInit {
  bridalGuests: Bridal[];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.getBridalGuests();
  }

  getBridalGuests() {
    this.firebaseService.getBridalGuests().subscribe(
      bridalGuests => this.bridalGuests = bridalGuests
    )
  }

}
