import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupService } from '../../services/group.service';

/**
 * Generated class for the NuevoGrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-grupo',
  templateUrl: 'nuevo-grupo.html',
})
export class NuevoGrupoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private groupService: GroupService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoGrupoPage');
  }

  onAddGroup(value: {ngroup:string, type:string, foto:string}){
    value.foto = value.foto.replace("C:\\fakepath\\", "../../assets/imgs/");
    this.groupService.addGroup(value);
    this.navCtrl.pop();
  }

}
