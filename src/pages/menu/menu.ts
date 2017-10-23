import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PlatoPage } from '../plato/plato';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  public userID:number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userID=this.navParams.get('userID');
    console.log(this.userID);
  }

  goToplato(menuID){
    this.navCtrl.push(PlatoPage, { menuID:menuID });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MenuPage');
  }

}
