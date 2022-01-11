import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { fader } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fader
  ]
})
export class AppComponent {
  title = 'Gabriel Tinoco Website';

  // For some reason using the outlet template variable directly doesn't work, but this works so whatever
  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData;
  }
}
