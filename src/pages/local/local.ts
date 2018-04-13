import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the LocalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-local',
  templateUrl: 'local.html',
})
export class LocalPage {

  public userID:number;
  
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.userID=this.navParams.get('userID');
      console.log(this.userID);
    }
  

  ionViewDidLoad() {
    console.log('se cargo el local');
  }

}
