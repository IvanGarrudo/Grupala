import { ForoPage } from './../foro/foro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticia } from '../../models/noticia.model'
import { NoticiaService } from '../../services/noticia.service';
import { ListPage } from '../list/list';


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

  noticias: Noticia[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private contactService: NoticiaService) {
    this.noticias = this.contactService.get();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrupoPage');
  }

  goToForo(){
    this.navCtrl.push(ForoPage);
  }

  goToLista(){
    this.navCtrl.push(ListPage);
  }

}
