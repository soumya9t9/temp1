import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  ngOnInit() { }

  lat: number = 51.673858;
  lng: number = 7.815982;
  zoom = 4;
  mapType;
  selectedMarker;
  readonly mapTypeIds: any = {
    ROADMAP: "ROADMAP",// (normal, default 2D map)
    SATELLITE: "SATELLITE", //(photographic map)
    HYBRID: "HYBRID", //(photographic map + roads and city names)
    TERRAIN: "TERRAIN" //(map with mountains, rivers, etc.)
  }
  markers: Marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true,
      isSelected: false
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false,
      isSelected: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true,
      isSelected: false
    }
  ]

  constructor() {
    this.defaultInitialization();
  }

  defaultInitialization() {
    this.mapType = this.mapTypeIds.ROADMAP
  }
  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }

  selectMarker(event, markerItem: any, index: number) {
    this.markers.forEach(eachMarker => { eachMarker.isSelected = false });
    markerItem.isSelected = true;
    this.selectedMarker = markerItem;
  }

  addMarker($event: any) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      isSelected: false,
      draggable: true
    });
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  isSelected?: boolean;
}
