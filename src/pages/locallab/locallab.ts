import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LabPage } from '../lab/lab';

/**
 * Generated class for the LocallabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-locallab',
  templateUrl: 'locallab.html',
})
export class LocallabPage {
  public userID:number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userID=this.navParams.get('userID');
    console.log(this.userID);
  }

  goTolaboratorio(laboratorioID){
    this.navCtrl.push(LabPage, { laboratorioID:laboratorioID });
  }

ionViewDidLoad() {
  console.log('se cargo el local');
}

}
