import { GroupService } from './../../services/group.service';
import { ForoPage } from './../foro/foro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticia } from '../../models/noticia.model'
import { NoticiaService } from '../../services/noticia.service';
import { ListPage } from '../list/list';
import { InfoGrupoPage } from '../info-grupo/info-grupo';
import { MisEventosPage } from '../mis-eventos/mis-eventos';


/**
 * Generated class for the GrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grupo',
  templateUrl: 'grupo.html',
})
export class GrupoPage {
  nombre=""
  noticias: Noticia[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private contactService: NoticiaService, private grupo:GroupService) {
    this.noticias = this.contactService.get();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrupoPage');
  }
  ionViewWillEnter(){
    this.nombre = this.grupo.getGroup()[0].ngroup;
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

}
