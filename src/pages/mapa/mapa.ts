import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng} from 'ionic-native';
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

  constructor(public navCtrl: NavController, public navParams: NavParams ,public geolocator:GeolocationService) {
  }

  ionViewDidLoad() {
    //obtener ubicacion del usuario para centrar ahi el mapa
    this.geolocator.get().then((result)=>{

      //cargar mapa
      this.LoadMap(result.coords.latitude,result.coords.longitude);
      console.log(result);


    }).catch((err)=>console.log(err));
  }

  LoadMap(lat,lng){

    let location: GoogleMapsLatLng= new GoogleMapsLatLng(lat,lng);

    new GoogleMap("map",{
      'controls':{
        'compass':true,
        'myLocationButton':true,
        'indoorPicker':true,
        'zoom':true
      },
      'gestures':{
        'scroll':true,
        'tilt':true,
        'rotate':true,
        'zoom':true
      },
      'camera':{
        'latLng':location,
        'tilt':30,
        'zoom':15,
        'bearing':50
      }
    })
  }

}
