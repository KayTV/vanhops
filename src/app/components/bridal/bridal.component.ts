import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './bridal.component.html',
  styleUrls: ['../../styles/shared.css']
})

export class BridalComponent {
  lat: number = 43.1450539;
  lng: number = -77.515922;
  zoom: number = 15;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  addGuest(name: string, attending: string, notes: string) {
    if (attending === "Game On! I'll be there!") {
      attending = 'Yes'
    }
    if (attending === "Game Over, can't make it...") {
      attending = 'No'
    }
    this.firebaseService.addBridalGuest(name, attending, notes);
    this.redirect();
  }

  redirect() {
    this.router.navigate(['/bridal/confirm'])
  }
}
