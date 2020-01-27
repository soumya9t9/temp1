import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { CahrtsComponent } from './cahrts/cahrts.component';
import { ChartsComponent } from './charts/charts.component';
import { GMapComponent } from './g-map/g-map.component';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CahrtsComponent,
    ChartsComponent,
    GMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDCAt2fOQ7y1wujCYU8oDe31S4mGj4jMz4'}),
      AgmJsMarkerClustererModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AIzaSyDCAt2fOQ7y1wujCYU8oDe31S4mGj4jMz4
// AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw