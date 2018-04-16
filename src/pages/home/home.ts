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
  //showSplash=true;

  splash = true;
  tabBarElement: any;
  
  constructor(platform: Platform,public navCtrl: NavController,public splashScreen: SplashScreen,public viewCtrl: ViewController,statusBar: StatusBar,modalCtrl: ModalController) {
    /*platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      timer(3000).subscribe(()=>this.showSplash=false);
      //let splash = modalCtrl.create(HomePage);
      //splash.present();
    });*/

    this.tabBarElement = document.querySelector('.tabbar');
  }
  /*ionViewDidEnter() {
    
       this.splashScreen.hide();
    
       setTimeout(() => {
         this.viewCtrl.dismiss();
       }, 4000);
    
     }*/
     ionViewDidLoad() {
      this.tabBarElement.style.display = 'none';
     // let tabBarElement = document.querySelector('.tabbar.show-tabbar'); if (tabBarElement != null) { this.tabBarElement.style.display = 'none';} // or whichever property which you want to access }
      setTimeout(() => {
        this.splash = false;
        this.tabBarElement.style.display = 'flex';
      }, 4000);
    }
  
}
