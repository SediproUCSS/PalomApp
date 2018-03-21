import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the LaboratorioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lab',
  templateUrl: 'lab.html',
})
export class LabPage {
  public userID:number;
  public list: any;
  newsData:any;
  loading:any;
  posts = [];
  constructor(private http:Http, public navCtrl: NavController, public navParams: NavParams) {
    this.userID=this.navParams.get('userID');
    console.log(this.userID);
    /**MOSTRAR GET LIST DE PLATOS.TS 
    users.getListPlato().then(results=>{
      console.log(results);
      this.list=results;
    }).catch(err=>{
      console.log(err);
    });
   */
          this.http.get('assets/data/disponibilidad.json').map(res => res.json())
          .subscribe(data=>{
            this.list=data;
            console.log('Los datos son: ' ,data);
          },
          err =>{
            console.error("Error : "+err);
          } ,
          () => {
            console.log('laboratorios completados'+ this.list);
          }

        );
  
    /*this.getdata();*/
  }

  ionViewDidLoad() {
    console.log('laboratorio cargado');
  }

  public myColor = ['danger', 'primary'];
  public colors = ['danger', 'primary'];
  public cont = 0;

 falta(lab: number){
   this.cont++;
   this.cont=(this.cont%this.colors.length)
   this.myColor[lab] = this.colors[this.cont];
  }

}
