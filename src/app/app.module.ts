import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GeolocationService } from '../services/geolocation.service';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Http, HttpModule} from '@angular/http';
import { Deeplinks }from '@ionic-native/deeplinks';
import { InAppBrowser }from '@ionic-native/in-app-browser';
import { Geolocation ,Geoposition } from '@ionic-native/geolocation';
import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';
import { InicioPage} from '../pages/inicio/inicio';
import { MapaPage} from '../pages/mapa/mapa';
import { LaboratorioPage} from '../pages/laboratorio/laboratorio';
import { MenuPage } from '../pages/menu/menu';
import { LocalPage } from '../pages/local/local';
import { ObjetoPage } from '../pages/objeto/objeto';
import { LocallabPage } from '../pages/locallab/locallab';
import { Users } from '../providers/users/users';
import { Platos } from '../providers/platos/platos';
import { ObjetoProvider } from '../providers/objeto/objeto';
import {HomePage} from '../pages/home/home';
import { CalculadoraPage } from '../pages/calculadora/calculadora';
import{ LabPage } from '../pages/lab/lab';
import { LocalProvider } from '../providers/local/local';
import { Laboratorios } from '../providers/laboratorios/laboratorios';
import {EventModalPage} from '../pages/event-modal/event-modal';
import{ NosotrosPage } from '../pages/nosotros/nosotros';
import{ ProyectosPage } from '../pages/proyectos/proyectos';
import{ AyudaPage } from '../pages/ayuda/ayuda';
import { LOCALE_ID } from '@angular/core';
import { EquipoPage } from '../pages/equipo/equipo';
import es from '@angular/common/locales/es';
//import { registerLocaleData } from '@angular/common';
/*import { CustomEventTitleFormatterProvider } from '../providers/custom-event-title-formatter/custom-event-title-formatter';
import { CustomDateFormatterProvider } from '../providers/custom-date-formatter/custom-date-formatter';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule,CalendarDateFormatter,CalendarEventTitleFormatter} from 'angular-calendar';
import {CalendarWeekHoursViewModule} from 'angular-calendar-week-hours-view';

*/
import {NgCalendarModule} from 'ionic2-calendar';
//import {CalendarModule} from 'angular-calendar';
@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    MapaPage,
    LaboratorioPage,
    MenuPage,
    LocalPage,
    LocallabPage,
    ObjetoPage,
    HomePage,
    CalculadoraPage,
    LabPage,
    EventModalPage,
    NosotrosPage,
    ProyectosPage,
    AyudaPage,
    EquipoPage
    

  ],
  imports: [NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    NgCalendarModule
    /*BrowserAnimationsModule,
    CalendarModule.forRoot(),
    CalendarWeekHoursViewModule*/
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    MapaPage,
    LaboratorioPage,
    LabPage,
    MenuPage,
    LocalPage,
    LocallabPage,
    ObjetoPage,
    HomePage,
    CalculadoraPage,
    NosotrosPage,
    ProyectosPage,
    AyudaPage,
    EquipoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide:ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: 'es-ES' },
    GeolocationService,
    Geolocation,
    GoogleMaps,
    Users,
    Platos,
    ObjetoProvider,
    Deeplinks,
    InAppBrowser,
    HomePage,
    Laboratorios,
    LocalProvider
   /* CustomEventTitleFormatterProvider,
    CustomDateFormatterProvider*/
  ]
})
export class AppModule {}
