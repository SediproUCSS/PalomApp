import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**import { PlatoPage } from '../plato/plato';*/
import { Platos } from '../../providers/platos/platos';
/**importar estos datos obligatorio */
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
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
  newsData:any;
  loading:any;
  posts = [];
 /* list = [];*/
  constructor(private http:Http, public navCtrl: NavController, public navParams: NavParams,users: Platos) {
    this.userID=this.navParams.get('userID');
    console.log(this.userID);
    /*MOSTRAR GET LIST DE PLATOS.TS */
    users.getListPlato().then(results=>{
      console.log('platos completados'+ results);
      this.list=results;
    }).catch(err=>{
      console.log(err);  
    });
   /**
          this.http.get('../../assets/data/vista_menu.json').map(res => res.json())
          .subscribe(data=>{
            this.list=data;
            console.log('Los datos son: ' ,data);
          },
          err =>{
            console.error("Error : "+err);
          } ,
          () => {
            console.log('platos completados'+ this.list);
          }

        );
  */
    /*this.getdata();*/
    
  }

  /*goToplato(menuID){
    this.navCtrl.push(PlatoPage, { menuID:menuID });
  }
*/
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad MenupruebaPage');
  }
 /* getdata(){
    this.CardsService.getJsonData().subscribe(
      result => {
        this.newsData=result;
        console.log("Success : "+this.newsData);
      },
      err =>{
        console.error("Error : "+err);
      } ,
      () => {
        console.log('getData completed');
      }
    );
  }
*/
}
