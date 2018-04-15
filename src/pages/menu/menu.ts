import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**import { PlatoPage } from '../plato/plato';*/
import { Platos } from '../../providers/platos/platos';
/**importar estos datos obligatorio */
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
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
  providers:[
    Platos
  ]
})
export class MenuPage {
  public userID:number;
  public list: any;
  newsData:any;
  loading:any;
  posts :any;
  url:string;
  platosusers: any[] = [];
 /* list = [];*/
  constructor(private http:Http, public navCtrl: NavController, public navParams: NavParams,public users: Platos) {

    
  //  this.userID=this.navParams.get('userID');
   // console.log(this.userID);
    /*MOSTRAR GET LIST DE PLATOS.TS */
    users.getListPlato().then(results=>{
      console.log('platos completados'+ results);
      this.list=results;
    }).catch(err=>{
      console.log(err);  
    });
    
  //******************************************************************************** */
/*          this.http.get('https://whispering-coast-35310.herokuapp.com/v_menu').map(res => res.json().rows)
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

        );*/
        /*this.getdata();*/
  //******************************************************************************** */
    
    
  }

  /*goToplato(menuID){
    this.navCtrl.push(PlatoPage, { menuID:menuID });
  }
*/
  ionViewDidLoad() {
    
  /*    this.users.getListPlato()
      .subscribe(
        (data) => { // Success
          this.list = data['results'];
        },
        (error) =>{
          console.error(error);
        }
      )
    
    console.log(this.platosusers);*/
  /*  this.menu.getmenu().subscribe(data=>{
      console.log(data);
    })*/
  }


/*showError(title, msg) {
  let alert = this.alertCtrl.create({
    title: title,
    subTitle: msg,
    buttons: ['Close']
  });
  alert.present();
}*/
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
