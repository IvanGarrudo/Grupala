import { GroupService } from './../../services/group.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Group } from '../../models/grupo.model';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private InfoService :GroupService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoGrupoPage');
  }
  update(value:Group){
    this.InfoService.updateGroup(value);
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.goToRoot;
  }
}
