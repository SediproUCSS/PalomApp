import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class Users {

  constructor(public http: Http) {
    console.log('Hello UsersProvider Provider');
  }


  public getListUser(){
    return new Promise((resolve, reject)=>{
      this.http.get('http://127.0.0.1:3000/plato').map(res => res.json())
      .subscribe((data:any = [])=>{
        console.log('Fetch data contactos: ', data.length);
  
        resolve(data);
      });
    })
  }

}
