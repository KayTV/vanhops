import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './bridal.component.html',
  styleUrls: ['../../styles/shared.css']
})
export class BridalComponent {
  lat: number = 43.1450539;
  lng: number = -77.515922;
  zoom: number = 15;
}
