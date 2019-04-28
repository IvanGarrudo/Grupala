import { Event } from './../../models/event.model';
import { ContactService } from './../../services/contact.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventService } from '../../services/event.service';
import { NuevoEventoPage } from '../nuevo-evento/nuevo-evento';

/**
 * Generated class for the MisEventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mis-eventos',
  templateUrl: 'mis-eventos.html',
})
export class MisEventosPage {
  events: Event[] = []
  public searchTerm: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private EventService: EventService,private ContactService:ContactService) {
  }

  ionViewWillEnter(){
    this.events = this.EventService.getGroup();
  }
  unir(){
    this.EventService.sss();
    this.events = this.EventService.getGroup();
  }
  onLoadEventPage(){
    this.navCtrl.push(NuevoEventoPage);
  }

  setFilteredItems(){
    this.events = this.EventService.filterItems(this.searchTerm);
  }

  ngOnInit(){
    this.setFilteredItems();
  }
}

