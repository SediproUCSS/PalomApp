import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GeolocationService } from '../services/geolocation.service';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Http, HttpModule } from '@angular/http';
import { Deeplinks }from '@ionic-native/deeplinks';
import { InAppBrowser }from '@ionic-native/in-app-browser';


import { MyApp } from './app.component';
import { InicioPage} from '../pages/inicio/inicio';
import { MapaPage} from '../pages/mapa/mapa';
import { CafeteriaPage} from '../pages/cafeteria/cafeteria';
import { LaboratorioPage} from '../pages/laboratorio/laboratorio';
import { MenuPage } from '../pages/menu/menu';
import { PlatoPage } from '../pages/plato/plato';
import { LocalPage } from '../pages/local/local';
import { ObjetoPage } from '../pages/objeto/objeto';
import { LocallabPage } from '../pages/locallab/locallab';
import { Users } from '../providers/users/users';
import { Platos } from '../providers/platos/platos';
import { ObjetoProvider } from '../providers/objeto/objeto';
import {HomePage} from '../pages/home/home';
import { CalculadoraPage } from '../pages/calculadora/calculadora';

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
    LocallabPage,
    ObjetoPage,
    HomePage,
    CalculadoraPage

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
    LocallabPage,
    ObjetoPage,
    HomePage,
    CalculadoraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GeolocationService,
    GoogleMaps,
    Users,
    Platos,
    ObjetoProvider,
    Deeplinks,
    InAppBrowser,
    HomePage
  ]
})
export class AppModule {}
