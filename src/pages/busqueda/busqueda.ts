//import { BusquedaPage } from './busqueda';
import { GrupoPage } from '../grupo/grupo';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, RootNode } from 'ionic-angular';
import { Group } from '../../models/grupo.model';
import { GroupService } from '../../services/group.service';
import { NuevoGrupoPage } from '../nuevo-grupo/nuevo-grupo';


/**
 * Generated class for the BusquedaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {
  groups: Group[] = [];
  public searchTerm: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private GroupService: GroupService) {
  }

  ionViewWillEnter(){
    this.groups = this.GroupService.getGroup();
  }

  onLoadGroupPage(){
    this.navCtrl.push(NuevoGrupoPage);
  }

  setFilteredItems(){
    this.groups = this.GroupService.filterItems(this.searchTerm);
  }

  ngOnInit(){
    this.setFilteredItems();
  }

  goToSame(){
    
    this.navCtrl.setRoot(BusquedaPage);
    
  }

  goToGrupo(){
    this.navCtrl.setRoot(GrupoPage);
  }
}
