import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MenuPage } from '../menu/menu';

/**
 * Generated class for the CafeteriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cafeteria',
  templateUrl: 'cafeteria.html',
})
export class CafeteriaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToMenu(userID){
    this.navCtrl.push(MenuPage, { userID:userID });
  }

  ionViewDidLoad() {
    console.log('cafeteria cargada');
  }

}
