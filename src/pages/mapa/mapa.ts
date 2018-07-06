import { Component,ElementRef,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,LatLng
 } from '@ionic-native/google-maps';
 import { LocalProvider } from '../../providers/local/local';
 import { Http,HttpModule } from '@angular/http';
import { GeolocationService } from '../../services/geolocation.service';
import { Geolocation,Geoposition } from '@ionic-native/geolocation';
import 'rxjs/add/operator/map';

//declare var google:any;
@IonicPage()

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
map: GoogleMap;
public userID:number;
  @ViewChild('map') element;
  constructor(private http:Http, public navCtrl: NavController, 
    public navParams: NavParams,public geolocation:Geolocation,private googleMaps: GoogleMaps) {
      this.userID=this.navParams.get('userID');
      console.log("usuario"+this.userID);
      //this.loadMap();
  }
//ngAfterViewInit(){
//this.geolocationNative();
//}
 /* geolocationNative(){
   this.geolocation.getCurrentPosition().then((geoposition:Geoposition)=>{
  //console.log(geoposition);
      
})
  }*/




  ionViewDidLoad() {
    //console.log(this.mapRef);
   // this.showMap();
   this.loadMap();
   console.log('CARGO PAGINA DE MAPA');
   //this.getPosition();

  }

/*getPosition():any{
  this.geolocation.getCurrentPosition().then(response=>{
    this.loadMap();
  })
  .catch(error=>{
    console.log(error);
  })
}*/
/*
loadMap(position:Geoposition){
  let latitude=position.coords.latitude;
  let longitude=position.coords.longitude;
  console.log(latitude,longitude);

  //let mapEle:HTMLElement=document.getElementById('map');

  let myLatLng={lat:latitude,lng:longitude};

  this.map=new google.maps.Map('map',{
    center:myLatLng,
    zoom:12
  });

  var infoWindow=new google.maps.infoWindow({
    content:'AQUI ESTOY'
  })

  let marker=new google.maps.Marker({
    icon: 'blue',
    position:myLatLng,
    map:this.map
  })

  marker.addListener('click',function(){
    infoWindow.open(this.map,marker)
  });

}

*/




loadMap() {
  //this.map = GoogleMaps.create(this.element.nativeElement);
      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: -11.998870367177533,
            lng: -77.0644462108612
          },
          zoom: 13,
          tilt: 30
        }
      };
  
     //this.map = GoogleMaps.create(this.element.nativeElement);
     this.map = GoogleMaps.create('map', mapOptions);
      // Wait the MAP_READY before using any methods.
      this.map.one(GoogleMapsEvent.MAP_READY)
        .then(() => {
          console.log('Map is ready!');
  
          // Now you can use all methods safely.
          this.map.addMarker({
              title: 'LOCAL CENTRAL',
              icon: 'assets/imgs/Marker.png',
              animation: 'DROP',
              position: {
                lat: -12.0000527,
                lng: -77.0638797
              }
            }),
            this.map.addMarker({
              title: 'GONZALES PRADA',
              icon: 'assets/imgs/Marker.png',
              animation: 'DROP',
              position: {
                lat: -11.99537937,
                lng: -77.0674281
              }
            }),
            this.map.addMarker({
              title: 'GLOBO TERRÁQUEO',
              icon: 'assets/imgs/Marker.png',
              animation: 'DROP',
              position: {
                lat: -11.99867550450735,
                lng: -77.06386220292143
              }
            })
           /* .then(marker => {
              marker.on(GoogleMapsEvent.MARKER_CLICK)
                .subscribe(() => {
                  alert('clicked');
                });
            })*/;
  
        });
    }



    














/*  showMap(){
    const location = new google.maps.LatLng(51.507351, -0.127758);
    const options={
      center:location,
      zoom:10
    }

    const map=new google.maps.Map(this.mapRef.nativeElement,options);
    this.addMarker(location,map);
    console.log(location);
  }
  addMarker(position,map){
    return new google.maps.Marker({
      title:'Local Central',
      position,
      map
    })
  }*/

}