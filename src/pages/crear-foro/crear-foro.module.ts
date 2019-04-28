import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearForoPage } from './crear-foro';

@NgModule({
  declarations: [
    CrearForoPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearForoPage),
  ],
})
export class CrearForoPageModule {}
