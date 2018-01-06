import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PlatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Laboratorios {
  list = [];
  constructor(public http: Http) {
    console.log('Hello LaboratoriosProvider Provider');
  }
 /*public getListPlato(){
    return new Promise((resolve, reject)=>{
      this.http.get('http://127.0.0.1:3000/plato').map(res => res.json())
      .subscribe((data:any = [])=>{
        console.log('Fetch data contactos: ', data.length);
  
        resolve(data);
      });
    })
  }
*/
  public getListLaboratorio(){
    return new Promise((resolve, reject)=>{
      this.http.get('../../assets/data/laboratorio.json').map(res => res.json())
      .subscribe(data=>{
        this.list=data;
        console.log('Los datos son: ' ,data);
      },
      err =>{
        console.error("Error : "+err);
      } ,
      () => {
        console.log('getData completed');
      }
    
    );
    })
  }

}
