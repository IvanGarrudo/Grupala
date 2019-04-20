import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactService } from '../../services/contact.service';
import { Observable } from 'rxjs/Observable';
import { Login } from '../../models/contact.model';
import { RegistroPage } from '../registro/registro';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  contacts$: Observable<Login[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ContactService:ContactService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
<<<<<<< HEAD
  comprobar(value: Login){
=======
    comprobar(value: Login){
>>>>>>> 0375fe4d671e7a490821062f4b301889126c503b
    this.ionViewWillEnter();
    var sesion = false;
    
    if(sesion){
      this.navCtrl.setRoot(HomePage);
      this.navCtrl.goToRoot;
    }else{
      alert("Usuario o contraseña no validos")
    }
<<<<<<< HEAD
=======
  }

  ionViewWillEnter(){
    this.contacts$ = this.ContactService.getContacts().snapshotChanges().map(
      changes => {
        return changes.map(c=> ({
          key: c.payload.key, ...c.payload.val()
        }));
      }
    );
>>>>>>> 0375fe4d671e7a490821062f4b301889126c503b
  }

  ionViewWillEnter(){
    this.contacts$ = this.ContactService.getContacts().snapshotChanges().map(
      changes => {
        return changes.map(c=> ({
          key: c.payload.key, ...c.payload.val()
        }));
      }
    );
  }
   
 
  goToSignup(){
    this.navCtrl.push(RegistroPage);
  }

}
