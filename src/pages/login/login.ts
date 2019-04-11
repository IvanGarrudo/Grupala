import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactService } from '../../services/contact.service';
import { Observable } from 'rxjs/Observable';
import { Login } from '../../models/contact.model';

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
  addMember(value: Login){
    //Buscar el señor correspondiente en la base de datos y comprobar que la contraseña es igual
  }
  Hash(contraseña: string){
    var temporal:number[];
    var i =0;
    var total=0;
    for (var letra of contraseña) {
      temporal[i]=(contraseña.charCodeAt(i)*i);
      i++;
    }
    for (var etral of temporal) {
      total=total+etral;
    }
    return total;
  }

}
