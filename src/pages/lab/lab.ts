import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Laboratorios } from '../../providers/laboratorios/laboratorios';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
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
  //information:any[];
  constructor(public alertCtrl: AlertController ,private http:Http, public navCtrl: NavController, public navParams: NavParams,users: Laboratorios) {
    this.userID=this.navParams.get('userID');
    console.log(this.userID);
    //MOSTRAR GET LIST DE laborarotios.ts 
    users.getListLaboratorio().then(results=>{
      console.log('labs completados'+results);
      this.list=results;
      
    }).catch(err=>{
      console.log(err);
    });
//dasdasdas


 /*   let localData=this.http.get('assets/data/information.json').map(res=>res.json().items);
    localData.subscribe(data=>{
      this.information=data;
    })*/
   
       /*   this.http.get('http://127.0.0.1:3000/laboratorio').map(res => res.json())
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
/*
  public myColor = ['danger', 'primary'];
  public colors = ['danger', 'primary'];
  public cont = 0;

 falta(lab: number){
   this.cont++;
   this.cont=(this.cont%this.colors.length)
   this.myColor[lab] = this.colors[this.cont];
  }
*/
}
