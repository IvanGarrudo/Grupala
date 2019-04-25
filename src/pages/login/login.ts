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
  contacts:Login[] =[]
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private ContactService:ContactService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  comprobar(value: Login){
    ContactService.getContacts().then(this.contacts){
      var sesion = false;
      console.log(this.contacts)
      if(sesion){
        this.navCtrl.setRoot(HomePage);
        this.navCtrl.goToRoot;
      }else{
        alert("Usuario o contraseña no validos")
      }      
    }    
  }

 

   
 
  goToSignup(){
    this.navCtrl.push(RegistroPage);
  }

}
