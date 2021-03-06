import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Group } from '../../models/grupo.model';
import { GroupService } from '../../services/group.service';
import { NuevoGrupoPage } from '../nuevo-grupo/nuevo-grupo';
import { MisEventosPage } from '../mis-eventos/mis-eventos';
import { GrupoPage } from '../grupo/grupo';
import { ListPage } from '../list/list';
import { InfoGrupoPage } from '../info-grupo/info-grupo';
import { ForoPage } from './../foro/foro';


@IonicPage()
@Component({
  selector: 'page-mis-grupos',
  templateUrl: 'mis-grupos.html',
})
export class MisGruposPage {
  groups: Group[] = []
  public searchTerm: string = "";

  /*
  lista=[{titulo:"Gamers", tipo:"Videojuegos", Miembros:59},
        {titulo:"What's a computer?", tipo:"Tecnología", Miembros:12},
        {titulo:"The 80's", tipo:"Videojuegos", Miembros:548},
        {titulo:"Amijos", tipo:"Social", Miembros:4}]
        */
  constructor(public navCtrl: NavController, public navParams: NavParams, private GroupService: GroupService) {
  }
/*
  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscadorPage');
  }
*/

  ionViewWillEnter(){
    this.groups = this.GroupService.getGroup();
  }

  onLoadGroupPage(){
    this.navCtrl.push(NuevoGrupoPage);
  }

  eventosPage(){
    this.navCtrl.push(MisEventosPage);
  }

  setFilteredItems(){
    this.groups = this.GroupService.filterItems(this.searchTerm);
  }

  ngOnInit(){
    this.setFilteredItems();
  }
  goToNoticias(){
    this.navCtrl.push(GrupoPage);
  }
  goToForo(){
    this.navCtrl.push(ForoPage);
  }

  goToLista(){
    this.navCtrl.push(ListPage);
  }
  
  goToInfo(){
    this.navCtrl.push(InfoGrupoPage);
  }

  goToEventos(){    
    //this.navCtrl.setRoot(EventosPage);
  }

}

