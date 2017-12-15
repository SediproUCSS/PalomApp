import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GeolocationService } from '../services/geolocation.service';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Http, HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { InicioPage} from '../pages/inicio/inicio';
import { MapaPage} from '../pages/mapa/mapa';
import { CafeteriaPage} from '../pages/cafeteria/cafeteria';
import { LaboratorioPage} from '../pages/laboratorio/laboratorio';
import { MenuPage } from '../pages/menu/menu';
import { PlatoPage } from '../pages/plato/plato';
import { LocalPage } from '../pages/local/local';
import { LocallabPage } from '../pages/locallab/locallab';
import { Users } from '../providers/users/users';
import { Platos } from '../providers/platos/platos';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    MapaPage,
    CafeteriaPage,
    LaboratorioPage,
    MenuPage,
    PlatoPage,
    LocalPage,
    LocallabPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
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
    LocalPage,
    LocallabPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GeolocationService,
    GoogleMaps,
    Users,
    Platos
  ]
})
export class AppModule {}
