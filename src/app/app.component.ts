import { Component, ViewChild } from '@angular/core';
import { Platform, Nav,ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Deeplinks } from '@ionic-native/deeplinks';
import { timer } from 'rxjs/observable/timer';

import { InicioPage} from '../pages/inicio/inicio';
import { MapaPage} from '../pages/mapa/mapa';
import { CafeteriaPage} from '../pages/cafeteria/cafeteria';
import { LaboratorioPage} from '../pages/laboratorio/laboratorio';
import { LocallabPage} from '../pages/locallab/locallab';
import { MenuPage } from '../pages/menu/menu';
import { ObjetoPage } from '../pages/objeto/objeto';
import { HomePage } from '../pages/home/home';
import { CalculadoraPage } from '../pages/calculadora/calculadora';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild ('NAV') nav: Nav;
  public rootPage:any;
  public pages: Array<{titulo: string,component: any, icon: string}>;
  showSplash=true;
  constructor(platform: Platform,  statusBar: StatusBar, splashScreen: SplashScreen, private deeplinks: Deeplinks,modalCtrl: ModalController) {
    this.rootPage = InicioPage;
    this.pages= [
      {titulo:'Inicio',component:InicioPage,icon:'home'},
      {titulo:'Mapa',component:MapaPage,icon:'pin'},
      {titulo:'Cafeteria',component:MenuPage,icon:'pizza'},
      {titulo:'Laboratorio',component:LocallabPage,icon:'desktop'},
      {titulo:'Objetos Perdidos',component:ObjetoPage,icon:'cube'},
      {titulo:'Calcula Promedio',component:CalculadoraPage,icon:'calculator'}
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      statusBar.styleDefault();
      //splashScreen.hide();
      //timer(3000).subscribe(()=>this.showSplash=false)
      let splash = modalCtrl.create(HomePage);
      splash.present();
    });
      
  }
  
  goToPage(page){
    this.nav.setRoot(page);
    console.log('pagina cargada');
  }
      
}

