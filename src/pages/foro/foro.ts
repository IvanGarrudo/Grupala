import { CrearForoPage } from './../crear-foro/crear-foro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HilosPage } from '../hilos/hilos';
import { ListPage } from '../list/list';
import { InfoGrupoPage } from '../info-grupo/info-grupo';
import { GrupoPage } from '../grupo/grupo';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { MisEventosPage } from '../mis-eventos/mis-eventos';


/**
 * Generated class for the ForoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foro',
  templateUrl: 'foro.html',
})
export class ForoPage {

  public listaposts: Array<Post> =[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private contactService: PostService) {
    this.listaposts = this.contactService.posts;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForoPage');
  }

  alhilo(){
    this.navCtrl.push(HilosPage);
  }

  goToForo(){
    this.navCtrl.setRoot(ForoPage);
  }

  goToLista(){
    this.navCtrl.setRoot(ListPage);
  }
  
  goToInfo(){
    this.navCtrl.setRoot(InfoGrupoPage);
  }

  goToNoticias(){
    this.navCtrl.setRoot(GrupoPage);
  }

  goToEventos(){    
    this.navCtrl.setRoot(MisEventosPage);
  }
  goToCrear(){
    this.navCtrl.setRoot(CrearForoPage);
  }

}
