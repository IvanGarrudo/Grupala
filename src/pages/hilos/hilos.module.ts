import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HilosPage } from './hilos';

@NgModule({
  declarations: [
    HilosPage,
  ],
  imports: [
    IonicPageModule.forChild(HilosPage),
  ],
})
export class HilosPageModule {}
