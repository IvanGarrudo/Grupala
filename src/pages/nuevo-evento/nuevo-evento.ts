import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventService } from '../../services/event.service';

/**
 * Generated class for the NuevoEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-evento',
  templateUrl: 'nuevo-evento.html',
})
export class NuevoEventoPage  {

  constructor(public navCtrl: NavController, public navParams: NavParams, private eventService: EventService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoEventoPage');
  }

  onAddEvent(value: {nevent:string, desc:string, icon:string, user}){
    value.user=[];
    value.icon = value.icon.replace("C:\\fakepath\\", "../../assets/imgs/");
    this.eventService.addGroup(value);
    this.navCtrl.pop();
  }

}
