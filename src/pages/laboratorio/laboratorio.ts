import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Laboratorios } from '../../providers/laboratorios/laboratorios';
import 'rxjs/add/operator/map';
/**
 * Generated class for the LaboratorioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laboratorio',
  templateUrl: 'laboratorio.html',
})
export class LaboratorioPage {
  public userID:number;
  public list: any;
  newsData:any;
  loading:any;
  posts = [];

  eventSource;
    viewTitle
  isToday: boolean;
  calendar = {
      mode: 'month',
      currentDate: new Date()
  }; // these are the variable used by the calendar.

  constructor(private http:Http, public navCtrl: NavController, public navParams: NavParams,public laboratorios: Laboratorios) {
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
          this.http.get('assets/data/disponibilidad.json').map(res => res.json().items)
          .subscribe(data=>{
            this.list=data;
            console.log('Los datos son: ' ,data);
            this.onViewTitleChanged(data);
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

                loadEvents() {
                    this.eventSource = this.createRandomEvents();
                    console.log(this.eventSource);
                }
               public onViewTitleChanged(title) {
                    this.viewTitle = title;
                    console.log(this.viewTitle);
                }
                onEventSelected(event) {
                    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
                }
                changeMode(mode) {
                    this.calendar.mode = mode;
                    console.log(this.calendar.mode);
                }
                today() {
                    this.calendar.currentDate = new Date();
                }
                onTimeSelected(ev) {
                    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
                        (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
                }
                onCurrentDateChanged(event:Date) {
                    var today = new Date();
                    today.setHours(0, 0, 0, 0);
                    event.setHours(0, 0, 0, 0);
                    this.isToday = today.getTime() === event.getTime();
                }
                createRandomEvents() {
                    var events = [];
                    for (var i = 0; i < 50; i += 1) {
                        var date = new Date();
                        var eventType = Math.floor(Math.random() * 2);
                        var startDay = Math.floor(Math.random() * 90) - 45;
                        var endDay = Math.floor(Math.random() * 2) + startDay;
                        var startTime;
                        var endTime;
                        if (eventType === 0) {
                            startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                            if (endDay === startDay) {
                                endDay += 1;
                            }
                            endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                            events.push({
                                title: 'All Day - ' + i,
                                startTime: startTime,
                                endTime: endTime,
                                allDay: true
                            });
                        } else {
                            var startMinute = Math.floor(Math.random() * 24 * 60);
                            var endMinute = Math.floor(Math.random() * 180) + startMinute;
                            startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                            endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                            events.push({
                                title: 'Event - ' + i,
                                startTime: startTime,
                                endTime: endTime,
                                allDay: false
                            });
                        }
                    }
                    return events;
                }
                onRangeChanged(ev) {
                    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
                }
                markDisabled = (date:Date) => {
                    var current = new Date();
                    current.setHours(0, 0, 0);
                    return date < current;
                };

                ionViewDidLoad() {
                    console.log('laboratorio cargado');
                }


}
