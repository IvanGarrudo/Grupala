import { Component } from '@angular/core';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  comprobar(value: Login){
    
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.goToRoot;
  }
 
  goToSignup(){
    this.navCtrl.push(RegistroPage);
  }

}
