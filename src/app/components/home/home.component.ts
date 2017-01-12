import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  text: any = { "Weeks": "Weeks",
    "Days": "Days", "Hours": "Hours",
     Minutes: "Minutes", "Seconds": "Seconds",
    "MilliSeconds":"MilliSeconds" };
    
}
