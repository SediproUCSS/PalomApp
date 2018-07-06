import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ObjetoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ObjetoProvider {

  constructor(public http: Http) {
    console.log('Hello ObjetoProvider Provider');
  }
  public getListObjeto(){
    return new Promise((resolve, reject)=>{
      this.http.get('https://whispering-coast-35310.herokuapp.com/objetosperdidos').map(res => res.json().rows)
      .subscribe((data:any = [])=>{
        console.log('Fetch data objetos: ', data.length);
  
        resolve(data);
      });
    })
  }


}
