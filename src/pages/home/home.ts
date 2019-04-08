import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from "../../models/contact.model";
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private contactsRef=this.db.list<Login>('AgendaFirebase');
  constructor(private db:AngularFireDatabase) {

  }

  onAddMemeber(value: Login){
    return this.contactsRef.push(value);
  }

}
