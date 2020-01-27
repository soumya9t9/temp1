import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-g-map',
  templateUrl: './g-map.component.html',
  styleUrls: ['./g-map.component.scss']
})
export class GMapComponent implements OnInit {

  map = {
    center: {
      latitude: 26.344158,
      longitude: 92.673615
    },
    zoom: 6
    
  };
  
  markers;
  constructor() { }

  ngOnInit() {
  }

}
