import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactService } from '../../services/contact.service';
import { Observable } from 'rxjs/Observable';
import { Login } from '../../models/contact.model';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  login$: Observable<Login[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ContactService:ContactService) {
  }
  ionViewWillEnter(){
    this.login$ = this.ContactService.getContacts()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map(c=> ({
          key: c.payload.key, ...c.payload.val()
              }));
      }
    );
  }
 
  /*onLoadRegistroPage(){
    this.navCtrl.push(RegistroPage);

  }

  onItemTapped($event, contact){
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }*/

  
  onAddMember(value: Login){
    this.ContactService.addMember(value);
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.goToRoot;
  }

  

}

