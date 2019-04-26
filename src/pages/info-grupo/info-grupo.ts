import { infoService } from './../../services/​info.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactService } from '../../services/contact.service';
import { info } from '../../models/contact.model';
import { HomePage } from '../home/home';

/**
 * Generated class for the InfoGrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-grupo',
  templateUrl: 'info-grupo.html',
})
export class InfoGrupoPage {
  private inf:info;
  constructor(public navCtrl: NavController, public navParams: NavParams, private InfoService :infoService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoGrupoPage');
  }
  update(value:info){
    this.InfoService.updateContact(value);
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.goToRoot;
  }
}
