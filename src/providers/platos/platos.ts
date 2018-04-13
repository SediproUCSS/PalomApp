import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClientModule,HttpClient } from '@angular/common/http';
@Injectable()
export class Platos {
  //list = [];
  //public list: any;
  constructor(private http: Http) {
    console.log('Hello PlatosProvider Provider');
  }

// METODO PARA CONECTAR CON LA BASE DE DATOS 
//**************************************************************************
 /*public getListPlato(){
    return new Promise((resolve, reject)=>{
      this.http.get('http://127.0.0.1:3000/v_menu').map(res => res.json())
      .subscribe((data:any = [])=>{
        console.log('Fetch data contactos: ', data.length);
  
        resolve(data);
      });
    })
  }*/
//****************************************************************************
//*/
// METODO PARA CONECTAR CON EL JSON LOCAL (CARPETA ASSETS/DATA)
/*public getListPlato(){
  return new Promise((resolve, reject)=>{
    this.http.get('assets/data/v_menu.json').map(res => res.json())
    .subscribe((data:any = [])=>{
      console.log('Fetch data contactos: ', data.length);

      resolve(data);
    });
  })
}*/

public getListPlato(){
  return new Promise((resolve, reject)=>{
    this.http.get('https://whispering-coast-35310.herokuapp.com/v_menu').map(res => res.json().rows)
    .subscribe((data:any = [])=>{
      console.log('Fetch data contactos: ', data.length);
      console.log('capturando la DATA: ', data);
      resolve(data);
    });
  })
}





/*
getListPlato() {
  this.http.get('https://whispering-coast-35310.herokuapp.com/v_menu').map(res=>res.json().rows).subscribe(data=>{
    console.log(data);
  });
}
/*


//METODOS DE PRUEBA PARA CONEXIONES 
/*
  public getListPlato(){
    return new Promise((resolve, reject)=>{
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
    })
  }
  

  public getListPlato(){
    return new Promise((resolve, reject)=>{
      this.http.get('assets/data/vista_menu.json').map(res => res.json())
      .subscribe((data:any = [])=>{
        console.log('Fetch data platos: ', data.length);
  
        resolve(data);
      });
    })
  }*/
/*
  public getListPlato(){
    return new Promise((resolve, reject)=>{
      this.http.get('models/v_menu').map(res => res.json())
      .subscribe((data:any = [])=>{
        console.log('Fetch data platos: ', data.length);
  
        resolve(data);
      });
    })
  }
*/
}
