import { Component } from '@angular/core';
import { NavController,Platform,ModalController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewController } from 'ionic-angular';
import { timer } from 'rxjs/observable/timer';
import { StatusBar } from '@ionic-native/status-bar';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  showSplash=true;
  constructor(platform: Platform,public navCtrl: NavController,public splashScreen: SplashScreen,public viewCtrl: ViewController,statusBar: StatusBar,modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      timer(3000).subscribe(()=>this.showSplash=false);
      //let splash = modalCtrl.create(HomePage);
      //splash.present();
    });
  }
  ionViewDidEnter() {
    
       this.splashScreen.hide();
    
       setTimeout(() => {
         this.viewCtrl.dismiss();
       }, 4000);
    
     }
}
