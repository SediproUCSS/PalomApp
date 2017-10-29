import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
import { GeolocationService } from '../../services/geolocation.service';


/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  map: GoogleMap;
  mapElement: HTMLElement;
  constructor(private googleMaps: GoogleMaps) { }

  ionViewDidLoad() {
   this.loadMap();
  }

 loadMap() {
    this.mapElement = document.getElementById('map');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: -11.999976371038699,
          lng: -77.06377984955907
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = new GoogleMap(this.mapElement, mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then((result) => {
        console.log(result);

        // Now you can use all methods safely.
        this.map.addMarker({
            title: 'Local Central UCSS',
            icon: 'red',
            animation: 'DROP',
            position: {
              lat: -11.999976371038699,
              lng: -77.06377984955907
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

      });
  }
  
}
