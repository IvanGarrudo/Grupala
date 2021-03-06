webpackJsonp([11],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contact_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroPage = /** @class */ (function () {
    function RegistroPage(navCtrl, navParams, ContactService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ContactService = ContactService;
    }
    /*onLoadRegistroPage(){
      this.navCtrl.push(RegistroPage);
  
    }
  
    onItemTapped($event, contact){
      
    }
    
    ionViewDidLoad() {
      console.log('ionViewDidLoad RegistroPage');
    }*/
    RegistroPage.prototype.onAddMember = function (value) {
        this.ContactService.addMember(value);
        this.ContactService.pushu(value.nusuario);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.goToRoot;
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\registro\registro.html"*/'<!--\n\n  Generated template for the RegistroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle end>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Grupala</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background: #232931">\n\n  <form (ngSubmit)="onAddMember(f.value)" #f="ngForm" class="formulario">\n\n    <ion-item text-wrap class="elemento">Para poder acceder a todas las posiblidades de nuestra app es necesario registrarse, no le llevará más de un minuto.</ion-item>\n\n    <ion-list style="background: #232931">\n\n      <ion-item class="elemento" >\n\n        <ion-label >Nombre de usuario</ion-label>\n\n      </ion-item>\n\n      <ion-item class="conBorde">\n\n        <ion-input type="text" placeholder="Texto" name="nusuario" ngModel required></ion-input>\n\n      </ion-item>\n\n      <ion-item class="elemento">\n\n        <ion-label>Contraseña</ion-label>\n\n      </ion-item>\n\n      <ion-item class="conBorde">\n\n        <ion-input type="Password" placeholder="Texto" name="cusuario" ngModel required></ion-input>\n\n      </ion-item>\n\n      <ion-item class="elemento">\n\n        <ion-label>E-mail</ion-label>\n\n      </ion-item>\n\n      <ion-item class="conBorde">\n\n        <ion-input type="text" placeholder="name@example.com" name="eusuario" ngModel required></ion-input>\n\n      </ion-item>\n\n      <ion-item class="elemento">\n\n          <ion-checkbox ngModel required name="aceptaCondiciones"></ion-checkbox><ion-label text-wrap>He leído y acepto las condiciones de uso</ion-label>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list class="botonera" style="background: #232931">\n\n      <button ion-button block type="submit" [disabled]="!f.valid" class="botones">Aceptar</button> \n\n      <button ion-back-button class="botones" id="boton_cancelar">CANCELAR</button>\n\n    </ion-list>\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\registro\registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventService = /** @class */ (function () {
    function EventService(ContactService) {
        this.ContactService = ContactService;
        this.events = [{ "nevent": "Gamers", "desc": "Bla bla bla bla bla bla bla bla bla bla ", "icon": "../../assets/imgs/logo.png", "user": [""] }];
    }
    EventService.prototype.getGroup = function () {
        return this.events;
    };
    EventService.prototype.addGroup = function (value) {
        value.user = [];
        this.events.push(value);
    };
    EventService.prototype.updateGroup = function (value) {
    };
    EventService.prototype.sss = function () {
        this.events[1].user.push("-" + this.ContactService.getu());
    };
    EventService.prototype.removeGroup = function (value) {
    };
    EventService.prototype.filterItems = function (searchTerm) {
        return this.events.filter(function (events) {
            return events.nevent.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
                events.desc.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    EventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__contact_service__["a" /* ContactService */]])
    ], EventService);
    return EventService;
}());

//# sourceMappingURL=event.service.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_post_model__ = __webpack_require__(440);

var PostService = /** @class */ (function () {
    function PostService() {
        this.posts = [new __WEBPACK_IMPORTED_MODULE_0__models_post_model__["a" /* Post */]("Manuales", "Hilo para hablar de manuales de D&D")];
    }
    PostService.prototype.add = function (titulo, desc) {
        this.posts.unshift(new __WEBPACK_IMPORTED_MODULE_0__models_post_model__["a" /* Post */](titulo, desc));
    };
    return PostService;
}());

//# sourceMappingURL=post.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearForoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foro_foro__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_noticia_model__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_noticia_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CrearForoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CrearForoPage = /** @class */ (function () {
    function CrearForoPage(navCtrl, navParams, servicio, actualiza) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servicio = servicio;
        this.actualiza = actualiza;
    }
    CrearForoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrearForoPage');
    };
    CrearForoPage.prototype.crear = function (nuevo) {
        this.servicio.add(nuevo.titulo, nuevo.desc);
        var noticia = new __WEBPACK_IMPORTED_MODULE_4__models_noticia_model__["a" /* Noticia */]("chatboxes", "Se ha creado un nuevo foro llamado " + nuevo.titulo);
        this.actualiza.add(noticia);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__foro_foro__["a" /* ForoPage */]);
    };
    CrearForoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-crear-foro',template:/*ion-inline-start:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\crear-foro\crear-foro.html"*/'<!--\n\n  Generated template for the CrearForoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>crearForo</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background: #232931">\n\n    <form (ngSubmit)="crear(f.value)" #f="ngForm" class="formulario">\n\n        <div text-wrap class="elemento">En caso de querer modificar el grupo rellene los siguientes campos.</div>\n\n        <ion-list>\n\n          <div class="elemento" >\n\n            <ion-label >Nuevo nombre del foro</ion-label>\n\n          </div>\n\n          <ion-item style="border-radius: 8%" class="conBorde">\n\n            <ion-input  type="text" placeholder="" name="titulo" ngModel ></ion-input>\n\n          </ion-item>\n\n          <div class="elemento">\n\n            <ion-label>Descripcion del nuevo foro</ion-label>\n\n          </div>\n\n          <ion-item style="border-radius: 8%"  class="conBorde">\n\n            <ion-input  type="text" placeholder="" name="desc" ngModel ></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n        <button ion-button block type="submit" [disabled]="!f.valid">Aceptar</button> \n\n        \n\n      </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\crear-foro\crear-foro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_5__services_noticia_service__["a" /* NoticiaService */]])
    ], CrearForoPage);
    return CrearForoPage;
}());

//# sourceMappingURL=crear-foro.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HilosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mensajes__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_noticia_model__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_noticia_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HilosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HilosPage = /** @class */ (function () {
    function HilosPage(navCtrl, navParams, Nueva) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Nueva = Nueva;
        this.listam = [new __WEBPACK_IMPORTED_MODULE_0__mensajes__["a" /* mensajes */]("../assets/imgs/user3.png", "Considero que no tienes razón 5º es mejor"), new __WEBPACK_IMPORTED_MODULE_0__mensajes__["a" /* mensajes */]("../assets/imgs/user2.png", "3.5 es lo unico de D&D que se debería considerar rol"), new __WEBPACK_IMPORTED_MODULE_0__mensajes__["a" /* mensajes */]("../assets/imgs/user1.png", "Creo que todas las versiones tienen su público, aunque me inclino más por la primera versión, qué opninan ustedes?"),];
    }
    HilosPage.prototype.add = function (nuevo) {
        this.listam.push(new __WEBPACK_IMPORTED_MODULE_0__mensajes__["a" /* mensajes */]("../assets/imgs/user1.png", nuevo.mensaje));
        this.Nueva.add(new __WEBPACK_IMPORTED_MODULE_3__models_noticia_model__["a" /* Noticia */]("chatboxes", "catwoman a escrito \"" + nuevo.mensaje + "\" en el foro de Manuales"));
    };
    HilosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HilosPage');
    };
    HilosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-hilos',template:/*ion-inline-start:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\hilos\hilos.html"*/'<!--\n\n  Generated template for the HilosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>hilos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background: #232931">\n\n    <h3 class="titulo">Manuales</h3>\n\n\n\n    <ion-list *ngFor = "let mensajes of listam" class="manuales">\n\n      <ion-card class="hilo" color="secondary">\n\n        <ion-card-content>\n\n          <div class="perfil_hilo"><img src={{mensajes.icono}} class="img_perfil"/></div>\n\n          <div class="comentario">{{mensajes.mensaje}}</div>\n\n        </ion-card-content>        \n\n      </ion-card>\n\n    </ion-list>\n\n    \n\n    \n\n    \n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <form (ngSubmit)="add(f.value)" #f="ngForm">\n\n        <textarea ng-model="string"  type="text" placeholder="Nuevo mensaje" name="mensaje" ngModel style="width:100%;"></textarea>\n\n        <button ion-button block type="submit" [disabled]="!f.valid">Mandar</button>\n\n      </form>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\hilos\hilos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_noticia_service__["a" /* NoticiaService */]])
    ], HilosPage);
    return HilosPage;
}());

//# sourceMappingURL=hilos.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusquedaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grupo_grupo__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_group_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nuevo_grupo_nuevo_grupo__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { BusquedaPage } from './busqueda';





/**
 * Generated class for the BusquedaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BusquedaPage = /** @class */ (function () {
    function BusquedaPage(navCtrl, navParams, GroupService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.GroupService = GroupService;
        this.groups = [];
        this.searchTerm = "";
    }
    BusquedaPage_1 = BusquedaPage;
    BusquedaPage.prototype.ionViewWillEnter = function () {
        this.groups = this.GroupService.getGroup();
    };
    BusquedaPage.prototype.onLoadGroupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__nuevo_grupo_nuevo_grupo__["a" /* NuevoGrupoPage */]);
    };
    BusquedaPage.prototype.setFilteredItems = function () {
        this.groups = this.GroupService.filterItems(this.searchTerm);
    };
    BusquedaPage.prototype.ngOnInit = function () {
        this.setFilteredItems();
    };
    BusquedaPage.prototype.goToSame = function () {
        this.navCtrl.setRoot(BusquedaPage_1);
    };
    BusquedaPage.prototype.goToGrupo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__grupo_grupo__["a" /* GrupoPage */]);
    };
    BusquedaPage = BusquedaPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-busqueda',template:/*ion-inline-start:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\busqueda\busqueda.html"*/'<!--\n\n  Generated template for the BusquedaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    \n\n  <ion-navbar >\n\n    <ion-title>Grupala</ion-title>\n\n    <button ion-button menuToggle end>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n \n\n  \n\n    \n\n    <ion-navbar class="buscador" >\n\n        <ion-searchbar animated [(ngModel)]="searchTerm" (ionChange)="setFilteredItems()" class="entrada"></ion-searchbar>\n\n        <button ion-button solid  (click)="goToSame()" class="boton" >Buscar</button>\n\n      </ion-navbar>\n\n    \n\n\n\n  <ion-list>\n\n    <button ion-item *ngFor="let group of groups" (click)="goToGrupo()">\n\n      <tr >\n\n        <td>\n\n            <ion-avatar><img [src]="group.foto"></ion-avatar>\n\n        </td>\n\n        <td>\n\n          <h2>{{group.ngroup}}</h2>\n\n          <h3>{{group.type}}</h3>\n\n        </td>\n\n      </tr>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\busqueda\busqueda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_group_service__["a" /* GroupService */]])
    ], BusquedaPage);
    return BusquedaPage;
    var BusquedaPage_1;
}());

//# sourceMappingURL=busqueda.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contact_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registro_registro__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, ContactService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ContactService = ContactService;
        this.aaa = "as";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.comprobar = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var c;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        c = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/Logins/' + a.nusuario).once('value').then(function (snapshot) {
                            var username = (snapshot.val() && snapshot.val().contra);
                            return a.cusuario == username;
                        });
                        return [4 /*yield*/, c];
                    case 1:
                        if (_a.sent()) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                        }
                        else {
                            alert("Usuario o contraseña no validos");
                        }
                        this.ContactService.pushu(a.nusuario);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.a = function (a) {
        return __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/Logins/' + a.nusuario).once('value').then(function (snapshot) {
            var username = (snapshot.val() && snapshot.val().contra);
            return a.cusuario == username;
        });
    };
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registro_registro__["a" /* RegistroPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Grupala</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding style="background: #232931">\n\n  <h3 class="elemento">Inicio de Sesion</h3>\n\n  <form (ngSubmit)="comprobar(f.value)" #f="ngForm" class="formulario">\n\n   \n\n    <ion-list style="background: #232931">\n\n      <div class="elemento">\n\n        <ion-label>Nombre usuario</ion-label>\n\n      </div>\n\n      <ion-item >\n\n        <ion-input type="text" placeholder="pepito22" name="nusuario" ngModel required></ion-input>\n\n      </ion-item>\n\n      <div class="elemento">\n\n        <ion-label>Contraseña</ion-label>\n\n      </div>\n\n      <ion-item >\n\n        <ion-input type="Password" placeholder="*******" name="cusuario" ngModel required></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list class="botonera">\n\n      <button ion-button block type="submit" [disabled]="!f.valid" >Aceptar</button> \n\n    </ion-list>\n\n  </form>\n\n  <ion-list class="botonera">\n\n  <button ion-button block  id="boton_registro" (click)="goToSignup()" >¿No tines cuenta?</button>\n\n </ion-list>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisGruposPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_group_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuevo_grupo_nuevo_grupo__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mis_eventos_mis_eventos__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grupo_grupo__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MisGruposPage = /** @class */ (function () {
    /*
    lista=[{titulo:"Gamers", tipo:"Videojuegos", Miembros:59},
          {titulo:"What's a computer?", tipo:"Tecnología", Miembros:12},
          {titulo:"The 80's", tipo:"Videojuegos", Miembros:548},
          {titulo:"Amijos", tipo:"Social", Miembros:4}]
          */
    function MisGruposPage(navCtrl, navParams, GroupService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.GroupService = GroupService;
        this.groups = [];
        this.searchTerm = "";
    }
    /*
      ionViewDidLoad() {
        console.log('ionViewDidLoad BuscadorPage');
      }
    */
    MisGruposPage.prototype.ionViewWillEnter = function () {
        this.groups = this.GroupService.getGroup();
    };
    MisGruposPage.prototype.onLoadGroupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__nuevo_grupo_nuevo_grupo__["a" /* NuevoGrupoPage */]);
    };
    MisGruposPage.prototype.eventosPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mis_eventos_mis_eventos__["a" /* MisEventosPage */]);
    };
    MisGruposPage.prototype.setFilteredItems = function () {
        this.groups = this.GroupService.filterItems(this.searchTerm);
    };
    MisGruposPage.prototype.ngOnInit = function () {
        this.setFilteredItems();
    };
    MisGruposPage.prototype.goToNoticias = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__grupo_grupo__["a" /* GrupoPage */]);
    };
    MisGruposPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mis-grupos',template:/*ion-inline-start:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\mis-grupos\mis-grupos.html"*/'<!--\n\n  Generated template for the MisGruposPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>MisGrupos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar animated [(ngModel)]="searchTerm" (ionChange)="setFilteredItems()"></ion-searchbar>\n\n\n\n\n\n  <ion-list>\n\n    <ion-item  (click)="goToNoticias()" *ngFor="let group of groups">\n\n      <tr>\n\n        <td>\n\n            <ion-avatar><img [src]="group.foto"></ion-avatar>\n\n        </td>\n\n        <td>\n\n          <h2>{{group.ngroup}}</h2>\n\n          <h3>{{group.type}}</h3>\n\n          <button ion-button clear (click)="eventosPage()">eventos</button>\n\n        </td>\n\n      </tr>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button full color="secondary" (click)="onLoadGroupPage()">Nuevo grupo</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\mis-grupos\mis-grupos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_group_service__["a" /* GroupService */]])
    ], MisGruposPage);
    return MisGruposPage;
}());

//# sourceMappingURL=mis-grupos.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoEventoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NuevoEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevoEventoPage = /** @class */ (function () {
    function NuevoEventoPage(navCtrl, navParams, eventService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventService = eventService;
    }
    NuevoEventoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevoEventoPage');
    };
    NuevoEventoPage.prototype.onAddEvent = function (value) {
        value.icon = value.icon.replace("C:\\fakepath\\", "../../assets/imgs/");
        this.eventService.addGroup(value);
        this.navCtrl.pop();
    };
    NuevoEventoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nuevo-evento',template:/*ion-inline-start:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\nuevo-evento\nuevo-evento.html"*/'<!--\n\n  Generated template for the NuevoEventoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Crear evento</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <form (ngSubmit)="onAddEvent(f.value)" #f="ngForm">\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label>Nombre</ion-label>\n\n          <ion-input type="text" placeholder="nombre" name="nevent" ngModel required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Descripción</ion-label>\n\n          <ion-input class="description"  type="text" placeholder="desc" name="desc" ngModel required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Icono</ion-label>\n\n            <ion-input type="file" name="icon" ngModel ></ion-input>\n\n           </ion-item>\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="!f.valid">Crear</button>\n\n    </form>\n\n    </ion-content>\n\n    '/*ion-inline-end:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\nuevo-evento\nuevo-evento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */]])
    ], NuevoEventoPage);
    return NuevoEventoPage;
}());

//# sourceMappingURL=nuevo-evento.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/busqueda/busqueda.module": [
		454,
		10
	],
	"../pages/crear-foro/crear-foro.module": [
		451,
		9
	],
	"../pages/foro/foro.module": [
		450,
		8
	],
	"../pages/grupo/grupo.module": [
		452,
		7
	],
	"../pages/hilos/hilos.module": [
		453,
		6
	],
	"../pages/info-grupo/info-grupo.module": [
		455,
		5
	],
	"../pages/login/login.module": [
		456,
		4
	],
	"../pages/mis-eventos/mis-eventos.module": [
		458,
		3
	],
	"../pages/mis-grupos/mis-grupos.module": [
		457,
		2
	],
	"../pages/nuevo-evento/nuevo-evento.module": [
		459,
		1
	],
	"../pages/nuevo-grupo/nuevo-grupo.module": [
		460,
		0
	],
	"../pages/registro/registro.module": [
		243
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 216;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistroPageModule = /** @class */ (function () {
    function RegistroPageModule() {
    }
    RegistroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registro__["a" /* RegistroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registro__["a" /* RegistroPage */]),
            ],
        })
    ], RegistroPageModule);
    return RegistroPageModule;
}());

//# sourceMappingURL=registro.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(307);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_crear_foro_crear_foro__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_busqueda_busqueda__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_noticia_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_registro_registro_module__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_list__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_registro_registro__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mis_grupos_mis_grupos__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_nuevo_grupo_nuevo_grupo__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_mis_eventos_mis_eventos__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_nuevo_evento_nuevo_evento__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_grupo_grupo__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_foro_foro__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_hilos_hilos__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_firebase_credentials__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_database__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_info_grupo_info_grupo__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_contact_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_login_login__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_group_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_event_service__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_24__pages_info_grupo_info_grupo__["a" /* InfoGrupoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_mis_grupos_mis_grupos__["a" /* MisGruposPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_nuevo_grupo_nuevo_grupo__["a" /* NuevoGrupoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mis_eventos_mis_eventos__["a" /* MisEventosPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_nuevo_evento_nuevo_evento__["a" /* NuevoEventoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_grupo_grupo__["a" /* GrupoPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_busqueda_busqueda__["a" /* BusquedaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_foro_foro__["a" /* ForoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_hilos_hilos__["a" /* HilosPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_crear_foro_crear_foro__["a" /* CrearForoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/foro/foro.module#ForoPageModule', name: 'ForoPage', segment: 'foro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crear-foro/crear-foro.module#CrearForoPageModule', name: 'CrearForoPage', segment: 'crear-foro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/grupo/grupo.module#GrupoPageModule', name: 'GrupoPage', segment: 'grupo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hilos/hilos.module#HilosPageModule', name: 'HilosPage', segment: 'hilos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/busqueda/busqueda.module#BusquedaPageModule', name: 'BusquedaPage', segment: 'busqueda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-grupo/info-grupo.module#InfoGrupoPageModule', name: 'InfoGrupoPage', segment: 'info-grupo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mis-grupos/mis-grupos.module#MisGruposPageModule', name: 'MisGruposPage', segment: 'mis-grupos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mis-eventos/mis-eventos.module#MisEventosPageModule', name: 'MisEventosPage', segment: 'mis-eventos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevo-evento/nuevo-evento.module#NuevoEventoPageModule', name: 'NuevoEventoPage', segment: 'nuevo-evento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevo-grupo/nuevo-grupo.module#NuevoGrupoPageModule', name: 'NuevoGrupoPage', segment: 'nuevo-grupo', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_22_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_21__app_firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_23_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_4__pages_registro_registro_module__["RegistroPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_24__pages_info_grupo_info_grupo__["a" /* InfoGrupoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_mis_grupos_mis_grupos__["a" /* MisGruposPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_nuevo_grupo_nuevo_grupo__["a" /* NuevoGrupoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mis_eventos_mis_eventos__["a" /* MisEventosPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_nuevo_evento_nuevo_evento__["a" /* NuevoEventoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_grupo_grupo__["a" /* GrupoPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_busqueda_busqueda__["a" /* BusquedaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_foro_foro__["a" /* ForoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_hilos_hilos__["a" /* HilosPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_crear_foro_crear_foro__["a" /* CrearForoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_25__services_contact_service__["a" /* ContactService */],
                __WEBPACK_IMPORTED_MODULE_28__services_event_service__["a" /* EventService */],
                __WEBPACK_IMPORTED_MODULE_2__services_noticia_service__["a" /* NoticiaService */],
                __WEBPACK_IMPORTED_MODULE_27__services_group_service__["a" /* GroupService */],
                __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mensajes; });
var mensajes = /** @class */ (function () {
    function mensajes(icono, mensaje) {
        this.icono = icono;
        this.mensaje = mensaje;
    }
    return mensajes;
}());

//# sourceMappingURL=mensajes.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrupoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foro_foro__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_noticia_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__info_grupo_info_grupo__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the GrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GrupoPage = /** @class */ (function () {
    function GrupoPage(navCtrl, navParams, contactService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactService = contactService;
        this.noticias = [];
        this.noticias = this.contactService.get();
    }
    GrupoPage_1 = GrupoPage;
    GrupoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GrupoPage');
    };
    GrupoPage.prototype.goToForo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__foro_foro__["a" /* ForoPage */]);
    };
    GrupoPage.prototype.goToLista = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */]);
    };
    GrupoPage.prototype.goToInfo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__info_grupo_info_grupo__["a" /* InfoGrupoPage */]);
    };
    GrupoPage.prototype.goToNoticias = function () {
        this.navCtrl.setRoot(GrupoPage_1);
    };
    GrupoPage.prototype.goToEventos = function () {
        //this.navCtrl.setRoot(EventosPage);
    };
    GrupoPage = GrupoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-grupo',template:/*ion-inline-start:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\grupo\grupo.html"*/'<!--\n\n  Generated template for the GrupoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar >\n\n      <button ion-button menuToggle end>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Grupala</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background: #232931">\n\n  <h3 class="titulo">D&D</h3>\n\n  <h4 class="titulo1">Noticias</h4>\n\n\n\n  <ion-list *ngFor = "let noticia of noticias" >\n\n    <ion-card color="secondary" >\n\n      <ion-card-content>\n\n          <div class="imagen">\n\n            <ion-icon name={{noticia.icono}}></ion-icon>\n\n          </div>\n\n          <div class="mensaje">\n\n            {{noticia.mensaje}}\n\n          </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n  \n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <button ion-button  class="botoncito"  >Noticias</button>\n\n        <button ion-button    class="botoncito" (click)="goToForo()" >Foro</button>\n\n        <button ion-button   class="botoncito" (click)="goToEventos()" >Eventos</button>\n\n        <button ion-button    class="botoncito" (click)="goToInfo()" >Cambios</button>\n\n        <button ion-button     class="botoncito" (click)="goToLista()" >Amigos</button>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\grupo\grupo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_noticia_service__["a" /* NoticiaService */]])
    ], GrupoPage);
    return GrupoPage;
    var GrupoPage_1;
}());

//# sourceMappingURL=grupo.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = /** @class */ (function () {
    function Post(titulo, desc) {
        this.titulo = titulo;
        this.desc = desc;
    }
    return Post;
}());

//# sourceMappingURL=post.model.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mis_grupos_mis_grupos__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Mis Grupos', component: __WEBPACK_IMPORTED_MODULE_6__pages_mis_grupos_mis_grupos__["a" /* MisGruposPage */] },
            { title: 'Cerrar sesion', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\app\app.html"*/'<ion-menu [content]="content" side="end">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyDxoVvl5se1jHZrzbfuc_ca1nhaLH8ySzk",
    authDomain: "agenda-e0be9.firebaseapp.com",
    databaseURL: "https://agenda-e0be9.firebaseio.com",
    projectId: "agenda-e0be9",
    storageBucket: "agenda-e0be9.appspot.com",
    messagingSenderId: "89461846372"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__crear_foro_crear_foro__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hilos_hilos__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__info_grupo_info_grupo__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grupo_grupo__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_post_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mis_eventos_mis_eventos__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ForoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForoPage = /** @class */ (function () {
    function ForoPage(navCtrl, navParams, contactService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactService = contactService;
        this.listaposts = [];
        this.listaposts = this.contactService.posts;
    }
    ForoPage_1 = ForoPage;
    ForoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForoPage');
    };
    ForoPage.prototype.alhilo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__hilos_hilos__["a" /* HilosPage */]);
    };
    ForoPage.prototype.goToForo = function () {
        this.navCtrl.setRoot(ForoPage_1);
    };
    ForoPage.prototype.goToLista = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */]);
    };
    ForoPage.prototype.goToInfo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__info_grupo_info_grupo__["a" /* InfoGrupoPage */]);
    };
    ForoPage.prototype.goToNoticias = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__grupo_grupo__["a" /* GrupoPage */]);
    };
    ForoPage.prototype.goToEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__mis_eventos_mis_eventos__["a" /* MisEventosPage */]);
    };
    ForoPage.prototype.goToCrear = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__crear_foro_crear_foro__["a" /* CrearForoPage */]);
    };
    ForoPage = ForoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-foro',template:/*ion-inline-start:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\foro\foro.html"*/'<!--\n\n  Generated template for the ForoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Grupala</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background: #232931">\n\n  <h3 class="titulo" color="light">Foros de D&D</h3>\n\n\n\n  <ion-list *ngFor = "let post of listaposts" class="Foros_dd">\n\n    <ion-card class="los_hilos" (click)="alhilo()" color="secondary">\n\n      <ion-card-header>\n\n        <ion-card-title class="titulos" style="color:white">{{post.titulo}}</ion-card-title>\n\n      </ion-card-header>\n\n      <ion-card-content style="color:white">\n\n        {{post.desc}}\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n  \n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n      <button ion-button  small block  (click)="goToCrear()">Nuevo Hilo</button>\n\n      <button ion-button  class="botoncito"  (click)="goToNoticias()">Noticias</button>\n\n      <button ion-button    class="botoncito" (click)="goToForo()" >Foro</button>\n\n      <button ion-button   class="botoncito" (click)="goToEventos()" >Eventos</button>\n\n      <button ion-button    class="botoncito" (click)="goToInfo()" >Cambios</button>\n\n      <button ion-button     class="botoncito" (click)="goToLista()" >Amigos</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\foro\foro.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_post_service__["a" /* PostService */]) === "function" && _c || Object])
    ], ForoPage);
    return ForoPage;
    var ForoPage_1, _a, _b, _c;
}());

//# sourceMappingURL=foro.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_noticia_model__ = __webpack_require__(74);

/*
Esta clase se encarga de contener las noticias de un grupo, Las noticias son limitas
por una variable, para que no se llene toda la pagina de noticias nuevas,
si no solo ciertos eventos que han sucedido en el grupo.
*/
var NoticiaService = /** @class */ (function () {
    function NoticiaService() {
        this.noticias = [new __WEBPACK_IMPORTED_MODULE_0__models_noticia_model__["a" /* Noticia */]("chatboxes", "Bertin a comentado: \"Considero que no tienes razon 5º es mejor.\" en el hilo Manuales"), new __WEBPACK_IMPORTED_MODULE_0__models_noticia_model__["a" /* Noticia */]("chatboxes", "PerezReverte a comentado: \"3.5 es lo unico de D&D que se deberia considerar rol\" en el hilo Manuales")];
        this.tamaño = 2;
        this.limite = 10;
    }
    NoticiaService.prototype.add = function (nueva) {
        if (this.tamaño < this.limite) {
            this.noticias.unshift(nueva);
            this.tamaño++;
        }
        else {
            this.noticias.splice(9);
            this.noticias.unshift(nueva);
        }
    };
    NoticiaService.prototype.get = function () {
        return this.noticias;
    };
    return NoticiaService;
}());

//# sourceMappingURL=noticia.service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GroupService = /** @class */ (function () {
    function GroupService() {
        this.groups = [{ "ngroup": "Gamers", "type": "Videojuegos", "foto": "../../assets/imgs/logo.png" }];
    }
    GroupService.prototype.getGroup = function () {
        return this.groups;
    };
    GroupService.prototype.addGroup = function (value) {
        this.groups.push(value);
    };
    GroupService.prototype.updateGroup = function (value) {
        if (value.ngroup != "") {
            this.groups[0].ngroup = value.ngroup;
        }
        if (value.type != "") {
            this.groups[0].type = value.type;
        }
        if (value.foto != "") {
            this.groups[0].foto = value.foto;
        }
    };
    GroupService.prototype.removeGroup = function (value) {
    };
    GroupService.prototype.filterItems = function (searchTerm) {
        return this.groups.filter(function (groups) {
            return groups.ngroup.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
                groups.type.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    GroupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GroupService);
    return GroupService;
}());

//# sourceMappingURL=group.service.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = /** @class */ (function () {
    function ContactService(db) {
        this.db = db;
        this.contactsRef = this.db.list('Logins');
    }
    ContactService.prototype.addMember = function (value) {
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('Logins/' + value.nusuario).set({
            mail: value.eusuario,
            contra: value.cusuario
        });
        // this.contacts.push(value);
        //return this.contactsRef.push(value);
    };
    ContactService.prototype.getu = function () {
        return this.susuario;
    };
    ContactService.prototype.pushu = function (a) {
        this.susuario = a;
    };
    ContactService.prototype.getContacts = function (a) {
        var uno = false;
        var c = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/Logins/' + a.nusuario).once('value').then(function (snapshot) {
            var username = (snapshot.val() && snapshot.val().contra);
            return username == a.cusuario;
            /*if(username == a.cusuario){
                uno = true;
                return uno;
            }
            if(username != a.cusuario){
                uno = false;
                return uno;
            }*/
        });
        /*var path = "/Logins/"+a.nusuario+"/contra";
        var c = firebase.database().ref(path).once('value');
        alert(c);*/
        //const l = db.ref('/Logins/');
    };
    ContactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ContactService);
    return ContactService;
}());

//# sourceMappingURL=contact.service.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoGrupoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_group_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grupo_grupo__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__foro_foro__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_noticia_model__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_noticia_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the InfoGrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoGrupoPage = /** @class */ (function () {
    function InfoGrupoPage(navCtrl, navParams, InfoService, Nueva) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.InfoService = InfoService;
        this.Nueva = Nueva;
    }
    InfoGrupoPage_1 = InfoGrupoPage;
    InfoGrupoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoGrupoPage');
    };
    InfoGrupoPage.prototype.update = function (value) {
        this.InfoService.updateGroup(value);
        var noticia = new __WEBPACK_IMPORTED_MODULE_6__models_noticia_model__["a" /* Noticia */]("chatboxes", "El grupo Ahora se llama " + value.ngroup);
        this.Nueva.add(noticia);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__grupo_grupo__["a" /* GrupoPage */]);
    };
    InfoGrupoPage.prototype.goToForo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__foro_foro__["a" /* ForoPage */]);
    };
    InfoGrupoPage.prototype.goToLista = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */]);
    };
    InfoGrupoPage.prototype.goToInfo = function () {
        this.navCtrl.setRoot(InfoGrupoPage_1);
    };
    InfoGrupoPage.prototype.goToNoticias = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__grupo_grupo__["a" /* GrupoPage */]);
    };
    InfoGrupoPage.prototype.goToEventos = function () {
        //this.navCtrl.setRoot(EventosPage);
    };
    InfoGrupoPage = InfoGrupoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-info-grupo',template:/*ion-inline-start:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\info-grupo\info-grupo.html"*/'<!--\n\n  Generated template for the InfoGrupoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle end>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Grupala</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background: #232931;">\n\n    <form (ngSubmit)="update(f.value)" #f="ngForm" class="formulario">\n\n        <div text-wrap class="elemento">En caso de querer modificar el grupo rellene los siguientes campos.</div>\n\n        <ion-list>\n\n          <div class="elemento" >\n\n            <ion-label >Nuevo nombre del grupo</ion-label>\n\n          </div>\n\n          <ion-item style="border-radius: 8%" class="conBorde">\n\n            <ion-input  type="text" placeholder="" name="ngroup" ngModel ></ion-input>\n\n          </ion-item>\n\n          <div class="elemento">\n\n            <ion-label>Nuevo tipo de grupo</ion-label>\n\n          </div>\n\n          <ion-item style="border-radius: 8%"  class="conBorde">\n\n            <ion-input  type="text" placeholder="" name="type" ngModel ></ion-input>\n\n          </ion-item>\n\n          <div style="background: #232931;">\n\n            <ion-label class="elemento">Imagen</ion-label>\n\n            <ion-input style="color:#738598;background: #232931;" type="file" name="foto" ngModel ></ion-input>\n\n           </div>\n\n        </ion-list>\n\n        <button ion-button block type="submit" [disabled]="!f.valid">Aceptar</button> \n\n        \n\n      </form>\n\n\n\n</ion-content>\n\n<ion-footer style="background: #232931;">\n\n  <ion-toolbar >\n\n    <button ion-button    class="botoncito"  (click)="goToNoticias()">Noticias</button>\n\n    <button ion-button    class="botoncito" (click)="goToForo()" >Foro</button>\n\n    <button ion-button    class="botoncito" (click)="goToEventos()" >Eventos</button>\n\n    <button ion-button    class="botoncito"  >Cambios</button>\n\n    <button ion-button    class="botoncito" (click)="goToLista()" >Amigos</button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\info-grupo\info-grupo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__services_group_service__["a" /* GroupService */], __WEBPACK_IMPORTED_MODULE_7__services_noticia_service__["a" /* NoticiaService */]])
    ], InfoGrupoPage);
    return InfoGrupoPage;
    var InfoGrupoPage_1;
}());

//# sourceMappingURL=info-grupo.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Noticia; });
var Noticia = /** @class */ (function () {
    function Noticia(icono, mensaje) {
        this.icono = icono;
        this.mensaje = mensaje;
    }
    return Noticia;
}());

//# sourceMappingURL=noticia.model.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foro_foro__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info_grupo_info_grupo__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grupo_grupo__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.nombres = ['Jaime2033', 'anacletus', 'AngieEd', 'iñaquigur', 'mildred22', '3333232xXx23323',
            'americio', 'bobobobobobo', 'MrTooth', 'Ñamec'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            if (i < 4) {
                this.items.push({
                    title: this.nombres[i - 1],
                    note: "Admin",
                    icon: this.icons[i - 1]
                });
            }
            else {
                this.items.push({
                    title: this.nombres[i - 1],
                    note: "",
                    icon: this.icons[i - 1]
                });
            }
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage.prototype.goToForo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__foro_foro__["a" /* ForoPage */]);
    };
    ListPage.prototype.goToLista = function () {
        this.navCtrl.setRoot(ListPage_1);
    };
    ListPage.prototype.goToInfo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__info_grupo_info_grupo__["a" /* InfoGrupoPage */]);
    };
    ListPage.prototype.goToNoticias = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__grupo_grupo__["a" /* GrupoPage */]);
    };
    ListPage.prototype.goToEventos = function () {
        //this.navCtrl.setRoot(EventosPage);
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle end>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Grupala</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background: #232931">\n\n    <ion-list>\n\n        <div style="background: #232931" ion-item *ngFor="let item of items">\n\n          <ion-icon  [name]="item.icon" item-start></ion-icon>\n\n          <div style="color:#738598;" >{{item.title}}</div>\n\n          <div style="color:white;" class="item-note" item-end>\n\n            {{item.note}}\n\n          </div>\n\n        </div>\n\n    </ion-list>  \n\n</ion-content>\n\n<ion-footer style="background: #232931">\n\n  <ion-toolbar>\n\n    <button ion-button  class="botoncito" (click)="goToNoticias()" >Noticias</button>\n\n    <button ion-button    class="botoncito" (click)="goToForo()" >Foro</button>\n\n    <button ion-button   class="botoncito" (click)="goToEventos()" >Eventos</button>\n\n    <button ion-button    class="botoncito" (click)="goToInfo()" >Cambios</button>\n\n    <button ion-button     class="botoncito"  >Amigos</button>\n\n  </ion-toolbar>\n\n</ion-footer> '/*ion-inline-end:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__busqueda_busqueda__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, db) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.contactsRef = this.db.list('AgendaFirebase');
    }
    HomePage.prototype.onAddMemeber = function (value) {
        return this.contactsRef.push(value);
    };
    HomePage.prototype.goToBus = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__busqueda_busqueda__["a" /* BusquedaPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle end>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Grupala</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background: #232931">\n\n  <h3 style="color:#738598;">Bienvenido a Grupala</h3>\n\n  <ion-navbar class="buscador" color="dark">\n\n    <ion-searchbar class="entrada"></ion-searchbar>\n\n    <button ion-button solid  (click)="goToBus()" class="boton" >Buscar</button>\n\n  </ion-navbar>\n\n\n\n  <h4 style="color:#738598;">Grupos mas visitados</h4>\n\n  <ion-navbar color="secondary">\n\n      <ion-grid >\n\n          <ion-row >\n\n              <ion-col>\n\n              </ion-col>\n\n              <ion-col class="tabla">\n\n                Mgs\n\n                <br>\n\n                <ion-badge color="primary">\n\n                  800\n\n                </ion-badge>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col class="titulo">\n\n                  Videojuegos\n\n                </ion-col>\n\n                <ion-col class="tabla">\n\n                    pc master rage\n\n                    <br>\n\n                  <ion-badge color="primary">\n\n                      500\n\n                  </ion-badge>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                  <ion-col>\n\n                  </ion-col>\n\n                  <ion-col class="tabla">\n\n                    Borderland\n\n                    <br>\n\n                    <ion-badge color="primary">\n\n                        500\n\n                    </ion-badge>\n\n                  </ion-col>\n\n               </ion-row>\n\n      </ion-grid>\n\n\n\n      <ion-grid >\n\n          <ion-row>\n\n              <ion-col>\n\n              </ion-col>\n\n              <ion-col class="tabla">\n\n                Dresden\n\n               <br>\n\n                <ion-badge color="primary">\n\n                    300\n\n                </ion-badge>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col class="titulo">\n\n                  Rol\n\n                </ion-col>\n\n                <ion-col class="tabla">\n\n                  D&D\n\n                 <br>\n\n                  <ion-badge color="primary">\n\n                      250\n\n                  </ion-badge>\n\n                </ion-col>\n\n              </ion-row>\n\n      </ion-grid>\n\n\n\n      <ion-grid >\n\n          <ion-row>\n\n              <ion-col>\n\n              </ion-col>\n\n              <ion-col class="tabla">\n\n                FurCom\n\n                <br>\n\n                <ion-badge color="primary">\n\n                    50\n\n                </ion-badge>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col class="titulo">\n\n                  Furry\n\n                </ion-col>\n\n                <ion-col class="tabla">\n\n                  Centauros\n\n                 <br>\n\n                  <ion-badge color="primary">\n\n                      40\n\n                  </ion-badge>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                  <ion-col>\n\n                  </ion-col>\n\n                  <ion-col class="tabla">\n\n                    Fursonas\n\n                   <br>\n\n                    <ion-badge color="primary">\n\n                        45\n\n                    </ion-badge>\n\n                  </ion-col>\n\n               </ion-row>\n\n      </ion-grid>\n\n  </ion-navbar>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoGrupoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_group_service__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NuevoGrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevoGrupoPage = /** @class */ (function () {
    function NuevoGrupoPage(navCtrl, navParams, groupService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.groupService = groupService;
    }
    NuevoGrupoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevoGrupoPage');
    };
    NuevoGrupoPage.prototype.onAddGroup = function (value) {
        value.foto = value.foto.replace("C:\\fakepath\\", "../../assets/imgs/");
        this.groupService.addGroup(value);
        this.navCtrl.pop();
    };
    NuevoGrupoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nuevo-grupo',template:/*ion-inline-start:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\nuevo-grupo\nuevo-grupo.html"*/'<!--\n\n  Generated template for the NuevoGrupoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>crear nuevo grupo</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<form (ngSubmit)="onAddGroup(f.value)" #f="ngForm">\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>Nombre</ion-label>\n\n      <ion-input type="text" placeholder="nombre" name="ngroup" ngModel required></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Tema</ion-label>\n\n      <ion-input type="text" placeholder="tema" name="type" ngModel required></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Imagen</ion-label>\n\n        <ion-input type="file" name="foto" ngModel></ion-input>\n\n       </ion-item>\n\n  </ion-list>\n\n  <button ion-button block type="submit" [disabled]="!f.valid">Crear</button>\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\nuevo-grupo\nuevo-grupo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_group_service__["a" /* GroupService */]])
    ], NuevoGrupoPage);
    return NuevoGrupoPage;
}());

//# sourceMappingURL=nuevo-grupo.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisEventosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_contact_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_event_service__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nuevo_evento_nuevo_evento__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MisEventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MisEventosPage = /** @class */ (function () {
    function MisEventosPage(navCtrl, navParams, EventService, ContactService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.EventService = EventService;
        this.ContactService = ContactService;
        this.events = [];
        this.searchTerm = "";
    }
    MisEventosPage.prototype.ionViewWillEnter = function () {
        this.events = this.EventService.getGroup();
    };
    MisEventosPage.prototype.unir = function () {
        this.EventService.sss();
        this.events = this.EventService.getGroup();
    };
    MisEventosPage.prototype.onLoadEventPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__nuevo_evento_nuevo_evento__["a" /* NuevoEventoPage */]);
    };
    MisEventosPage.prototype.setFilteredItems = function () {
        this.events = this.EventService.filterItems(this.searchTerm);
    };
    MisEventosPage.prototype.ngOnInit = function () {
        this.setFilteredItems();
    };
    MisEventosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-mis-eventos',template:/*ion-inline-start:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\mis-eventos\mis-eventos.html"*/'<!--\n\n  Generated template for the MisEventosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>MisEventos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar animated [(ngModel)]="searchTerm" (ionChange)="setFilteredItems()"></ion-searchbar>\n\n\n\n\n\n  <ion-list>\n\n    <button ion-item (click)="unir()" *ngFor="let event of events">\n\n      <tr>\n\n        <td>\n\n            <ion-avatar><img [src]="event.icon"></ion-avatar>\n\n        </td>\n\n        <td>\n\n          <h2>{{event.nevent}}</h2>\n\n          <h3>{{event.desc}}</h3>\n\n          <h3>Participantes<br>{{event.user[0]}}</h3>\n\n              \n\n        </td>\n\n        \n\n        \n\n      </tr>\n\n    </button>\n\n  </ion-list>\n\n  <button ion-button full color="secondary" (click)="onLoadEventPage()">Nuevo evento</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Iván\Documents\AAUniversidad\DSI\fuego\Grupala\src\pages\mis-eventos\mis-eventos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_0__services_contact_service__["a" /* ContactService */]])
    ], MisEventosPage);
    return MisEventosPage;
}());

//# sourceMappingURL=mis-eventos.js.map

/***/ })

},[287]);
//# sourceMappingURL=main.js.map