import { ForoPage } from './../foro/foro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { Noticia } from '../../models/noticia.model'
import { NoticiaService } from '../../services/noticia.service';


/**
 * Generated class for the CrearForoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-foro',
  templateUrl: 'crear-foro.html',
})
export class CrearForoPage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public servicio:PostService, public actualiza:NoticiaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearForoPage');
  }

  crear(nuevo: Post){
    this.servicio.add(nuevo.titulo, nuevo.desc);
    var noticia: Noticia = new Noticia("chatboxes","Se ha creado un nuevo foro llamado "+nuevo.titulo);
    this.actualiza.add(noticia);
    this.navCtrl.setRoot(ForoPage);
  }

}
