import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalculadoraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculadora',
  templateUrl: 'calculadora.html',
})
export class CalculadoraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    /*function add(p1:number,p2:number,p3:number,p4:number,c1:number,c2:number,c3:number,c4:number
    ,c5:number,c6:number,c7:number,c8:number,c9:number,c10:number){
      var promparcial=(p1/10)+((p2*2)/10)+((p3*2)/10)+((p4*3)/10);
      var promcontinu=(c1+c2+c3+c4+c5+c6+c7+c8+c9+c10)*2/10;
      var result= promparcial+promcontinu;
      alert(result);
    }*/
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculadoraPage');
  }

}
