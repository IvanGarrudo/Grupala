import { CrearForoPage } from './../pages/crear-foro/crear-foro';
import { BusquedaPage } from './../pages/busqueda/busqueda';
import { NoticiaService } from './../services/noticia.service';
import { PostService } from './../services/post.service';
import { RegistroPageModule } from './../pages/registro/registro.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegistroPage } from '../pages/registro/registro';
import { MisGruposPage } from '../pages/mis-grupos/mis-grupos';
import { NuevoGrupoPage } from '../pages/nuevo-grupo/nuevo-grupo';
import { MisEventosPage } from '../pages/mis-eventos/mis-eventos';
import { NuevoEventoPage } from '../pages/nuevo-evento/nuevo-evento';
import { GrupoPage } from '../pages/grupo/grupo';
import { ForoPage } from '../pages/foro/foro';
import { HilosPage } from '../pages/hilos/hilos';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Services } from '@angular/core/src/view';
import { FIREBASE_CONFIG } from '../app/firebase.credentials';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { InfoGrupoPage } from '../pages/info-grupo/info-grupo';
import { ContactService } from '../services/contact.service';
import { LoginPage } from '../pages/login/login';
import { GroupService } from '../services/group.service';
import { EventService } from '../services/event.service';


@NgModule({
  declarations: [
    MyApp,
    InfoGrupoPage,
    HomePage,
    ListPage,
    LoginPage,
    MisGruposPage,
    NuevoGrupoPage,
    MisEventosPage,
    NuevoEventoPage,
    GrupoPage,
    BusquedaPage,
    ForoPage,
    HilosPage,
    CrearForoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    RegistroPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InfoGrupoPage,
    HomePage,
    ListPage,
    RegistroPage,
    LoginPage,
    MisGruposPage,
    NuevoGrupoPage,
    MisEventosPage,
    NuevoEventoPage,
    GrupoPage,
    BusquedaPage,
    ForoPage,
    HilosPage,
    CrearForoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactService,
    EventService,
    NoticiaService,
    GroupService,
    PostService
  ]
})
export class AppModule {}
