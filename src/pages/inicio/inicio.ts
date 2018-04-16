import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewController } from 'ionic-angular';
import { timer } from 'rxjs/observable/timer';
import { StatusBar } from '@ionic-native/status-bar';
/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'

})
export class InicioPage {
  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};
splash = true;
tabBarElement: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private theInAppBrowser: InAppBrowser) {
    this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad() {
    //this.tabBarElement.style.display = 'none';
     let tabBarElement = document.querySelector('.tabbar.show-tabbar'); if (tabBarElement != null) { this.tabBarElement.style.display = 'none';this.tabBarElement.style.display = 'flex';} // or whichever property which you want to access }
     setTimeout(() => {
       this.splash = false;
       //this.tabBarElement.style.display = 'flex';
     }, 4000);
    console.log('inicio cargado');
  }


      public openWithSystemBrowser(url : string){
        let target = "_system";
        this.theInAppBrowser.create(url,target,this.options);
    }
    public openWithInAppBrowser(url : string){
        let target = "_blank";
        this.theInAppBrowser.create(url,target,this.options);
    }
    public openWithCordovaBrowser(url : string){
        let target = "_self";
        this.theInAppBrowser.create(url,target,this.options);
    }

}
