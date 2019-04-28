import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactService } from '../../services/contact.service';
import { Observable } from 'rxjs/Observable';
import { Login } from '../../models/contact.model';
import { RegistroPage } from '../registro/registro';
import { HomePage } from '../home/home';
import { FirebaseApp } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { AngularFireModule} from 'angularfire2';
import firebase from "firebase";

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
  contacts:PromiseLike<Login[]>;
  private aaa="as";
  constructor(public navCtrl: NavController, public navParams: NavParams, private ContactService : ContactService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async comprobar(a: Login){
    //let miembros = [];
    var c= firebase.database().ref('/Logins/'+a.nusuario).once('value').then(function(snapshot){
      var username :string = (snapshot.val() && snapshot.val().contra );
      return a.cusuario == username;    
    });
    if (await c){
      this.navCtrl.setRoot(HomePage);
    }else{
      alert("Usuario o contraseña no validos");
    }
    this.ContactService.pushu(a.nusuario);
    /*this.ContactService.getContacts().then(this.contacts){
      var sesion = false;
      console.log(this.contacts)
      if(sesion){
        this.navCtrl.setRoot(HomePage);
        this.navCtrl.goToRoot;
      }else{
        alert("Usuario o contraseña no validos")
      }      
    } */   
  }   
  a(a:Login){
    return firebase.database().ref('/Logins/'+a.nusuario).once('value').then(function(snapshot){
      var username :string = (snapshot.val() && snapshot.val().contra );
      return a.cusuario == username;    
    });
  }
  goToSignup(){
    this.navCtrl.push(RegistroPage);
    
  }

}
