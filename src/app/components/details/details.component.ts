import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './details.component.html',
  styleUrls: ['../../styles/shared.css']
})
export class DetailsComponent {
  lat: number = 43.1914144;
  lng: number = -77.7362001;
  zoom: number = 15;

}
