import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LocalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalProvider {

  constructor(public http: Http) {
    console.log('Hello LocalProvider Provider');
  }
  public getListLocal(){
    return new Promise((resolve, reject)=>{
      this.http.get('assets/data/local.json').map(res => res.json())
      .subscribe((data:any = [])=>{
        console.log('Fetch data contactos: ', data.length);
  
        resolve(data);
      });
    })
  }
}
