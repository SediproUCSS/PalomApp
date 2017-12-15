import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaboratorioPage } from '../laboratorio/laboratorio';

/**
 * Generated class for the Local1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-local1',
  templateUrl: 'local1.html',
})
export class Local1Page {

  public userID:number;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userID=this.navParams.get('userID');
    console.log(this.userID);
  }

  goTolaboratorio(laboratorioID){
    this.navCtrl.push(LaboratorioPage, { laboratorioID:laboratorioID });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Local1Page');
  }

}
