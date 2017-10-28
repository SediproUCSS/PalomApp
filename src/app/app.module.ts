import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GeolocationService } from '../services/geolocation.service';
import { GoogleMaps } from '@ionic-native/google-maps';


import { MyApp } from './app.component';
import { InicioPage} from '../pages/inicio/inicio';
import { MapaPage} from '../pages/mapa/mapa';
import { CafeteriaPage} from '../pages/cafeteria/cafeteria';
import { LaboratorioPage} from '../pages/laboratorio/laboratorio';
import { MenuPage } from '../pages/menu/menu';
import { PlatoPage } from '../pages/plato/plato';
import { LocalPage } from '../pages/local/local';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    MapaPage,
    CafeteriaPage,
    LaboratorioPage,
    MenuPage,
    PlatoPage,
    LocalPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    MapaPage,
    CafeteriaPage,
    LaboratorioPage,
    MenuPage,
    PlatoPage,
    LocalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GeolocationService,
    GoogleMaps
  ]
})
export class AppModule {}
