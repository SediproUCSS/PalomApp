import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PlatoPage } from '../plato/plato';
import { Platos } from '../../providers/platos/platos';

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
  public list: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,users: Platos) {
    this.userID=this.navParams.get('userID');
    console.log(this.userID);
    users.getListPlato().then(results=>{
      console.log(results);
      this.list=results;
    }).catch(err=>{
      console.log(err);
    });
  }

  goToplato(menuID){
    this.navCtrl.push(PlatoPage, { menuID:menuID });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MenuPage');
  }

}
