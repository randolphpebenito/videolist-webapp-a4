import { Component, OnInit } from '@angular/core';

import { BarChartColors, PieChartColors } from './chart.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	barChartColors = BarChartColors;
	 public areaChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', tension: 0},
  ];
  public areaChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public areaChartOptions:any = {
    responsive: true,
		scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false
        }
      }]
    }
  };
  public areaChartColors:Array<any> = [
    { // grey
			backgroundColor: 'rgba(225,10,24,0.2)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
  ];
  public areaChartLegend:boolean = true;
  public areaChartType:string = 'line';

  // lineChart
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'bar';
  public pieChartType:string = 'pie';
 
  // Pie
	pieChartColors = PieChartColors;
  public pieChartLabels:string[] = ['New Visitor', 'Returning Visitor', ];
  public pieChartData:number[] = [300, 500];
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  public data: any;
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
  ngOnInit(){
  }



}

interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}

