import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ForoPage } from '../foro/foro';
import { InfoGrupoPage } from '../info-grupo/info-grupo';
import { GrupoPage } from '../grupo/grupo';
import { MisEventosPage } from '../mis-eventos/mis-eventos';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  nombres: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    this.nombres = ['Jaime2033', 'anacletus', 'AngieEd', 'iñaquigur', 'mildred22', '3333232xXx23323',
    'americio', 'bobobobobobo', 'MrTooth', 'Ñamec'];
    this.items = [];
    for (let i = 1; i < 11; i++) {
      if(i<4){
        this.items.push({
          title: this.nombres[i-1],
          note: "Admin" ,
          icon: this.icons[i-1]
        });
      }      else{
        this.items.push({
          title: this.nombres[i-1],
          note: "" ,
          icon: this.icons[i-1]
        });
      }
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
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
