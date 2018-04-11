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
  //list = [];
  constructor(public http: Http) {
    console.log('Hello LaboratoriosProvider Provider');
  }
// METODO PARA CONECTAR CON LA BASE DE DATOS 
//**************************************************************************
 /*public getListLaboratorio(){
    return new Promise((resolve, reject)=>{
      this.http.get('http://127.0.0.1:3000/laboratorio').map(res => res.json())
      .subscribe((data:any = [])=>{
        console.log('Fetch data contactos: ', data.length);
  
        resolve(data);
      });
    })
  }*/
  //****************************************************************************
  
  // METODO PARA CONECTAR CON EL JSON LOCAL (CARPETA ASSETS/DATA)
  public getListLaboratorio(){
    return new Promise((resolve, reject)=>{
      this.http.get('../../assets/data/disponibilidad.json').map(res => res.json())
      .subscribe((data:any = [])=>{
        console.log('Fetch data contactos: ', data.length);
  
        resolve(data);
      });
    })
  }











  //METODOS DE PRUEBA PARA CONEXIONES 
  /*public getListLaboratorio(){
    return new Promise((resolve, reject)=>{
      this.http.get('http://127.0.0.1:3000/laboratorio').map(res => res.json())
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
  }*/

}
