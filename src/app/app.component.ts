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
  // Values
  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;

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

  clickedMarker(marker: marker, index: number) {
    console.log(`Clicked marker: ${marker.name} at index: ${index}`);
  }

  mapClicked($event: any) {
    console.log('Map clicked');
    const newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }
    this.markers.push(newMarker);
  }

  markerDragEnd(marker: any, $event: any) {
    console.log('dragEnd', marker, $event);

    const updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }

    const newLat = $event.coords.lat;
    const newLng = $event.coords.lng;
  }

  addMarker() {
    console.log('Adding marker');
    let isDraggable = false;
    if(this.markerDraggable == 'yes') {
      isDraggable = true;
    }

    const newMarker = {
      name: this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isDraggable,
    }

    this.markers.push(newMarker);
  }



}

interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}

