import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ObjetoProvider } from '../../providers/objeto/objeto';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the ObjetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-objeto',
  templateUrl: 'objeto.html',
})
export class ObjetoPage {
  public userID:number;
  public list: any;
  newsData:any;
  loading:any;
  posts = [];
  constructor(private http:Http,public navCtrl: NavController, public navParams: NavParams,users: ObjetoProvider) {
    this.userID=this.navParams.get('userID');
    console.log(this.userID);
    /*MOSTRAR GET LIST DE PLATOS.TS */
    users.getListObjeto().then(results=>{
      console.log('objetos completados'+ results);
      this.list=results;
    }).catch(err=>{
      console.log(err);  
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObjetoPage');
  }

}
