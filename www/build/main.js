webpackJsonp([7],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoGrupoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_group_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
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
    function InfoGrupoPage(navCtrl, navParams, InfoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.InfoService = InfoService;
    }
    InfoGrupoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoGrupoPage');
    };
    InfoGrupoPage.prototype.update = function (value) {
        this.InfoService.updateGroup(value);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.goToRoot;
    };
    InfoGrupoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-info-grupo',template:/*ion-inline-start:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\info-grupo\info-grupo.html"*/'<!--\n\n  Generated template for the InfoGrupoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>info grupo</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <form (ngSubmit)="update(f.value)" #f="ngForm" class="formulario">\n\n        <ion-item text-wrap class="elemento">En caso de querer modificar el grupo rellene los siguientes campos.</ion-item>\n\n        <ion-list>\n\n          <ion-item class="elemento" >\n\n            <ion-label >Nuevo nombre del grupo</ion-label>\n\n          </ion-item>\n\n          <ion-item style="border-radius: 8%" class="conBorde">\n\n            <ion-input  type="text" placeholder="" name="ngroup" ngModel ></ion-input>\n\n          </ion-item>\n\n          <ion-item class="elemento">\n\n            <ion-label>Nuevo tipo de grupo</ion-label>\n\n          </ion-item>\n\n          <ion-item style="border-radius: 8%"  class="conBorde">\n\n            <ion-input  type="text" placeholder="" name="type" ngModel ></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label class="elemento">Imagen</ion-label>\n\n            <ion-input type="file" name="foto" ngModel ></ion-input>\n\n           </ion-item>\n\n        </ion-list>\n\n        <button ion-button block type="submit" [disabled]="!f.valid" class="botones">Aceptar</button> \n\n        \n\n      </form>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n      <button ion-button  class="botoncito"  >Noticias</button>\n\n      <button ion-button    class="botoncito" >Foro</button>\n\n      <button ion-button   class="botoncito" >Eventos</button>\n\n      <button ion-button    class="botoncito" >Admin</button>\n\n      <button ion-button     class="botoncito" >Amigos</button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\info-grupo\info-grupo.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_group_service__["a" /* GroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_group_service__["a" /* GroupService */]) === "function" && _c || Object])
    ], InfoGrupoPage);
    return InfoGrupoPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=info-grupo.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisGruposPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_group_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuevo_grupo_nuevo_grupo__ = __webpack_require__(113);
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
    MisGruposPage.prototype.setFilteredItems = function () {
        this.groups = this.GroupService.filterItems(this.searchTerm);
    };
    MisGruposPage.prototype.ngOnInit = function () {
        this.setFilteredItems();
    };
    MisGruposPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mis-grupos',template:/*ion-inline-start:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\mis-grupos\mis-grupos.html"*/'<!--\n\n  Generated template for the MisGruposPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>MisGrupos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-buttons end>\n\n    <button ion-button icon-only (click)="onLoadGroupPage()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n</ion-buttons>\n\n\n\n<ion-content padding>\n\n  <ion-searchbar animated [(ngModel)]="searchTerm" (ionChange)="setFilteredItems()"></ion-searchbar>\n\n\n\n\n\n  <ion-list>\n\n    <button ion-item *ngFor="let group of groups">\n\n      <tr>\n\n        <td>\n\n            <ion-avatar><img [src]="group.foto"></ion-avatar>\n\n        </td>\n\n        <td>\n\n          <h2>{{group.ngroup}}</h2>\n\n          <h3>{{group.type}}</h3>\n\n        </td>\n\n      </tr>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\mis-grupos\mis-grupos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_group_service__["a" /* GroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_group_service__["a" /* GroupService */]) === "function" && _c || Object])
    ], MisGruposPage);
    return MisGruposPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=mis-grupos.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoGrupoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_group_service__ = __webpack_require__(51);
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
            selector: 'page-nuevo-grupo',template:/*ion-inline-start:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\nuevo-grupo\nuevo-grupo.html"*/'<!--\n\n  Generated template for the NuevoGrupoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>crear nuevo grupo</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<form (ngSubmit)="onAddGroup(f.value)" #f="ngForm">\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>Nombre</ion-label>\n\n      <ion-input type="text" placeholder="nombre" name="ngroup" ngModel required></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Tema</ion-label>\n\n      <ion-input type="text" placeholder="tema" name="type" ngModel required></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Imagen</ion-label>\n\n        <ion-input type="file" name="foto" ngModel></ion-input>\n\n       </ion-item>\n\n  </ion-list>\n\n  <button ion-button block type="submit" [disabled]="!f.valid">Crear</button>\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\nuevo-grupo\nuevo-grupo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_group_service__["a" /* GroupService */]])
    ], NuevoGrupoPage);
    return NuevoGrupoPage;
}());

//# sourceMappingURL=nuevo-grupo.js.map

/***/ }),

/***/ 124:
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
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_noticia_model__ = __webpack_require__(251);

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
            this.noticias.push(nueva);
            this.tamaño++;
        }
        else {
            this.noticias.splice(9);
            this.noticias.push(nueva);
        }
    };
    NoticiaService.prototype.get = function () {
        return this.noticias;
    };
    return NoticiaService;
}());

//# sourceMappingURL=noticia.service.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro__ = __webpack_require__(88);
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

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/foro/foro.module": [
		344,
		0
	],
	"../pages/grupo/grupo.module": [
		345,
		6
	],
	"../pages/hilos/hilos.module": [
		346,
		1
	],
	"../pages/info-grupo/info-grupo.module": [
		347,
		5
	],
	"../pages/login/login.module": [
		348,
		4
	],
	"../pages/mis-grupos/mis-grupos.module": [
		349,
		3
	],
	"../pages/nuevo-grupo/nuevo-grupo.module": [
		350,
		2
	],
	"../pages/registro/registro.module": [
		126
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
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrupoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_noticia_service__ = __webpack_require__(125);
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
    GrupoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GrupoPage');
    };
    GrupoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-grupo',template:/*ion-inline-start:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\grupo\grupo.html"*/'<!--\n\n  Generated template for the GrupoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar >\n\n    <ion-title>Grupala</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding >\n\n  <h3 class="titulo">Noticias</h3>\n\n\n\n  <ion-list *ngFor = "let noticia of noticias" color="dark">\n\n    <ion-card >\n\n      <ion-card-content>\n\n          <div class="imagen">\n\n            <ion-icon name={{noticia.icono}}></ion-icon>\n\n          </div>\n\n          <div class="mensaje">\n\n            {{noticia.mensaje}}\n\n          </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n  \n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <button ion-button  class="botoncito"  >Noticias</button>\n\n        <button ion-button    class="botoncito" >Foro</button>\n\n        <button ion-button   class="botoncito" >Eventos</button>\n\n        <button ion-button    class="botoncito" >Admin</button>\n\n        <button ion-button     class="botoncito" >Amigos</button>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\grupo\grupo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_noticia_service__["a" /* NoticiaService */]])
    ], GrupoPage);
    return GrupoPage;
}());

//# sourceMappingURL=grupo.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contact_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registro_registro__ = __webpack_require__(88);
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
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.comprobar = function (a) {
        /*this.ContactService.getContacts().then(this.contacts){
          var sesion = false;
          console.log(this.contacts)
          if(sesion){
            this.navCtrl.setRoot(HomePage);
            this.navCtrl.goToRoot;
          }else{
            alert("Usuario o contraseña no validos")
          }
        } */
    };
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registro_registro__["a" /* RegistroPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title style="text-align: center">Grupala</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <h3 class="elemento">Inicio de Sesion</h3>\n\n  <form (ngSubmit)="comprobar(f.value)" #f="ngForm" class="formulario">\n\n   \n\n    <ion-list>\n\n      <ion-item class="elemento">\n\n        <ion-label>E-mail</ion-label>\n\n      </ion-item>\n\n      <ion-item class="conBorde">\n\n        <ion-input type="text" placeholder="name@example.com" name="eusuario" ngModel required></ion-input>\n\n      </ion-item>\n\n      <ion-item class="elemento">\n\n        <ion-label>Contraseña</ion-label>\n\n      </ion-item>\n\n      <ion-item class="conBorde">\n\n        <ion-input type="Password" placeholder="Texto" name="cusuario" ngModel required></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list class="botonera">\n\n      <button ion-button block type="submit" [disabled]="!f.valid" class="botones">Aceptar</button> \n\n    </ion-list>\n\n  </form>\n\n  <ion-list class="botonera">\n\n  <button ion-button block class="botones" id="boton_registro" (click)="goToSignup()" >¿No tines cuenta?</button>\n\n </ion-list>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(250);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_noticia_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_registro_registro_module__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_registro_registro__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mis_grupos_mis_grupos__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_nuevo_grupo_nuevo_grupo__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_grupo_grupo__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_firebase_credentials__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_info_grupo_info_grupo__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_contact_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_group_service__ = __webpack_require__(51);
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_info_grupo_info_grupo__["a" /* InfoGrupoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mis_grupos_mis_grupos__["a" /* MisGruposPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_nuevo_grupo_nuevo_grupo__["a" /* NuevoGrupoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_grupo_grupo__["a" /* GrupoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/foro/foro.module#ForoPageModule', name: 'ForoPage', segment: 'foro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/grupo/grupo.module#GrupoPageModule', name: 'GrupoPage', segment: 'grupo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hilos/hilos.module#HilosPageModule', name: 'HilosPage', segment: 'hilos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-grupo/info-grupo.module#InfoGrupoPageModule', name: 'InfoGrupoPage', segment: 'info-grupo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mis-grupos/mis-grupos.module#MisGruposPageModule', name: 'MisGruposPage', segment: 'mis-grupos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevo-grupo/nuevo-grupo.module#NuevoGrupoPageModule', name: 'NuevoGrupoPage', segment: 'nuevo-grupo', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__app_firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_1__pages_registro_registro_module__["RegistroPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_info_grupo_info_grupo__["a" /* InfoGrupoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mis_grupos_mis_grupos__["a" /* MisGruposPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_nuevo_grupo_nuevo_grupo__["a" /* NuevoGrupoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_grupo_grupo__["a" /* GrupoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__services_contact_service__["a" /* ContactService */],
                __WEBPACK_IMPORTED_MODULE_0__services_noticia_service__["a" /* NoticiaService */],
                __WEBPACK_IMPORTED_MODULE_20__services_group_service__["a" /* GroupService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 251:
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

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_info_grupo_info_grupo__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mis_grupos_mis_grupos__ = __webpack_require__(112);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_info_grupo_info_grupo__["a" /* InfoGrupoPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'MisGrupos', component: __WEBPACK_IMPORTED_MODULE_6__pages_mis_grupos_mis_grupos__["a" /* MisGruposPage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\app\app.html"*/'<ion-menu [content]="content" side="end">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <div ion-item *ngFor="let item of items">\n\n          <ion-icon [name]="item.icon" item-start></ion-icon>\n\n          {{item.title}}\n\n          <div class="item-note" item-end>\n\n            {{item.note}}\n\n          </div>\n\n        </div>\n\n    </ion-list>  \n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n      <button ion-button  class="botoncito"  >Noticias</button>\n\n      <button ion-button    class="botoncito" >Foro</button>\n\n      <button ion-button   class="botoncito" >Eventos</button>\n\n      <button ion-button    class="botoncito" >Admin</button>\n\n      <button ion-button     class="botoncito" >Amigos</button>\n\n  </ion-toolbar>\n\n</ion-footer> '/*ion-inline-end:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 343:
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

/***/ 51:
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

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(84);
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
    function HomePage(db) {
        this.db = db;
        this.contactsRef = this.db.list('AgendaFirebase');
    }
    HomePage.prototype.onAddMemeber = function (value) {
        return this.contactsRef.push(value);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle end>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Grupala</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Bienvenido a Grupala</h3>\n\n  <ion-navbar class="buscador" >\n\n    <ion-searchbar class="entrada"></ion-searchbar>\n\n    <button ion-button solid   class="boton" >Buscar</button>\n\n  </ion-navbar>\n\n\n\n  <h4>Grupos mas visitados</h4>\n\n  <ion-navbar>\n\n      <ion-grid >\n\n          <ion-row >\n\n              <ion-col>\n\n              </ion-col>\n\n              <ion-col class="tabla">\n\n                Mgs\n\n               \n\n                <ion-badge color="primary">\n\n                  800\n\n                </ion-badge>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col class="titulo">\n\n                  Videojuegos\n\n                </ion-col>\n\n                <ion-col class="tabla">\n\n                    pc master rage\n\n                  <ion-badge color="primary">\n\n                      500\n\n                  </ion-badge>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                  <ion-col>\n\n                  </ion-col>\n\n                  <ion-col class="tabla">\n\n                    Borderland\n\n                    <ion-badge color="primary">\n\n                        500\n\n                    </ion-badge>\n\n                  </ion-col>\n\n               </ion-row>\n\n      </ion-grid>\n\n\n\n      <ion-grid >\n\n          <ion-row>\n\n              <ion-col>\n\n              </ion-col>\n\n              <ion-col class="tabla">\n\n                Dresden\n\n               \n\n                <ion-badge color="primary">\n\n                    300\n\n                </ion-badge>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col class="titulo">\n\n                  Rol\n\n                </ion-col>\n\n                <ion-col class="tabla">\n\n                  D&D\n\n                 \n\n                  <ion-badge color="primary">\n\n                      250\n\n                  </ion-badge>\n\n                </ion-col>\n\n              </ion-row>\n\n      </ion-grid>\n\n\n\n      <ion-grid >\n\n          <ion-row>\n\n              <ion-col>\n\n              </ion-col>\n\n              <ion-col class="tabla">\n\n                FurCom\n\n                <ion-badge color="primary">\n\n                    50\n\n                </ion-badge>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col class="titulo">\n\n                  Furry\n\n                </ion-col>\n\n                <ion-col class="tabla">\n\n                  Centauros\n\n                 \n\n                  <ion-badge color="primary">\n\n                      40\n\n                  </ion-badge>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                  <ion-col>\n\n                  </ion-col>\n\n                  <ion-col class="tabla">\n\n                    Fursonas\n\n                   \n\n                    <ion-badge color="primary">\n\n                        45\n\n                    </ion-badge>\n\n                  </ion-col>\n\n               </ion-row>\n\n      </ion-grid>\n\n  </ion-navbar>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(84);
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
        this.contactsRef = this.db.list('AgendaFirebase');
    }
    ContactService.prototype.addMember = function (value) {
        // this.contacts.push(value);
        return this.contactsRef.push(value);
    };
    ContactService.prototype.getContacts = function () {
        return this.contactsRef.valueChanges().toPromise();
    };
    ContactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ContactService);
    return ContactService;
}());

//# sourceMappingURL=contact.service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contact_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.goToRoot;
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\registro\registro.html"*/'<!--\n\n  Generated template for the RegistroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle end>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Grupala - Registro</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form (ngSubmit)="onAddMember(f.value)" #f="ngForm" class="formulario">\n\n    <ion-item text-wrap class="elemento">Para poder acceder a todas las posiblidades de nuestra app es necesario registrarse, no le llevará más de un minuto.</ion-item>\n\n    <ion-list>\n\n      <ion-item class="elemento" >\n\n        <ion-label >Nombre de usuario</ion-label>\n\n      </ion-item>\n\n      <ion-item class="conBorde">\n\n        <ion-input type="text" placeholder="Texto" name="nusuario" ngModel required></ion-input>\n\n      </ion-item>\n\n      <ion-item class="elemento">\n\n        <ion-label>Contraseña</ion-label>\n\n      </ion-item>\n\n      <ion-item class="conBorde">\n\n        <ion-input type="Password" placeholder="Texto" name="cusuario" ngModel required></ion-input>\n\n      </ion-item>\n\n      <ion-item class="elemento">\n\n        <ion-label>E-mail</ion-label>\n\n      </ion-item>\n\n      <ion-item class="conBorde">\n\n        <ion-input type="text" placeholder="name@example.com" name="eusuario" ngModel required></ion-input>\n\n      </ion-item>\n\n      <ion-item class="elemento">\n\n          <ion-checkbox ngModel required name="aceptaCondiciones"></ion-checkbox><ion-label text-wrap>He leído y acepto las condiciones de uso</ion-label>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list class="botonera">\n\n      <button ion-button block type="submit" [disabled]="!f.valid" class="botones">Aceptar</button> \n\n      <button ion-back-button class="botones" id="boton_cancelar">CANCELAR</button>\n\n    </ion-list>\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\registro\registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ })

},[230]);
//# sourceMappingURL=main.js.map