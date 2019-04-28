import { mensajes } from './mensajes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticia } from '../../models/noticia.model'
import { NoticiaService } from '../../services/noticia.service';


/**
 * Generated class for the HilosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hilos',
  templateUrl: 'hilos.html',
})
export class HilosPage {

  public listam:Array<mensajes> = [new mensajes("../assets/imgs/user3.png","Considero que no tienes razón 5º es mejor"), new mensajes("../assets/imgs/user2.png","3.5 es lo unico de D&D que se debería considerar rol"), new mensajes("../assets/imgs/user1.png","Creo que todas las versiones tienen su público, aunque me inclino más por la primera versión, qué opninan ustedes?"),];
  constructor(public navCtrl: NavController, public navParams: NavParams, private Nueva :NoticiaService) {
  }

  add(nuevo:mensajes){
    this.listam.push(new mensajes("../assets/imgs/user1.png", nuevo.mensaje));
    this.Nueva.add(new Noticia("chatboxes","catwoman a escrito \""+nuevo.mensaje+"\" en el foro de Manuales"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HilosPage');
  }

}
