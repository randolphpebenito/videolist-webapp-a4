import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  zoom = 10;
  lat: number = 51.678418;
  lng: number = 7.809007;
  markers: marker[] = [
    {
      name: 'Company One',
      lat: 51.688418,
      lng: 7.909007,
      draggable: true,
    }, {
      name: 'Company Two',
      lat: 51.708418,
      lng: 7.889007,
      draggable: true,
    }, {
      name: 'Company Three',
      lat: 51.610111,
      lng: 7.849007,
      draggable: false,
    }
  ];

  constructor() {}

}

interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}

