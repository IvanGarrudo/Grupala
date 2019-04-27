import { BusquedaPage } from './../busqueda/busqueda';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from "../../models/contact.model";
import { AngularFireDatabase } from 'angularfire2/database';
import { MisGruposPage } from '../mis-grupos/mis-grupos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private contactsRef=this.db.list<Login>('AgendaFirebase');
  constructor(public navCtrl: NavController, private db:AngularFireDatabase) {

  }

  onAddMemeber(value: Login){
    return this.contactsRef.push(value);
  }

  goToBus(){
    
    this.navCtrl.setRoot(BusquedaPage);
    
  }

}
