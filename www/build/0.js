webpackJsonp([0],{

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForoPageModule", function() { return ForoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foro__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForoPageModule = /** @class */ (function () {
    function ForoPageModule() {
    }
    ForoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__foro__["a" /* ForoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__foro__["a" /* ForoPage */]),
            ],
        })
    ], ForoPageModule);
    return ForoPageModule;
}());

//# sourceMappingURL=foro.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HilosPage; });
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


/**
 * Generated class for the HilosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HilosPage = /** @class */ (function () {
    function HilosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HilosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HilosPage');
    };
    HilosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hilos',template:/*ion-inline-start:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\hilos\hilos.html"*/'<!--\n\n  Generated template for the HilosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>hilos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h3 class="titulo">Manuales</h3>\n\n\n\n    <ion-list class="manuales">\n\n      <ion-card class="hilo">\n\n        <ion-card-content>\n\n          <div class="perfil_hilo"><img src="../assets/imgs/user3.png" class="img_perfil"/></div>\n\n          <div class="comentario">Considero que no tienes razón 5º es mejor</div>\n\n        </ion-card-content>        \n\n      </ion-card>\n\n      <ion-card class="hilo">\n\n          <div class="perfil_hilo"><img src="../assets/imgs/user2.png" class="img_perfil"/></div>\n\n          <div class="comentario">3.5 es lo unico de D&D que se debería considerar rol</div>\n\n      </ion-card>\n\n      <ion-card class="hilo">\n\n          <div class="perfil_hilo"><img src="../assets/imgs/user1.png" class="img_perfil"/></div>\n\n          <div class="comentario">Creo que todas las versiones tienen su público, aunque me inclino más por la primera versión, qué opninan ustedes?</div>\n\n        </ion-card>\n\n    </ion-list>\n\n    \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\hilos\hilos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HilosPage);
    return HilosPage;
}());

//# sourceMappingURL=hilos.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hilos_hilos__ = __webpack_require__(351);
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
    function ForoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForoPage');
    };
    ForoPage.prototype.alhilo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hilos_hilos__["a" /* HilosPage */]);
    };
    ForoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-foro',template:/*ion-inline-start:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\foro\foro.html"*/'<!--\n\n  Generated template for the ForoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Grupala</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3 class="titulo">Foros de D&D</h3>\n\n\n\n  <ion-list class="Foros_dd">\n\n    <ion-card class="los_hilos" (click)="alhilo()">\n\n      <ion-card-header>\n\n        <ion-card-title class="titulos">Manuales</ion-card-title>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        Hilo para hablar de manuales de D&D\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="los_hilos">\n\n      <ion-card-header>\n\n        <ion-card-title class="titulos">Builds de personajes</ion-card-title>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        Hilo para hablar sobre las builds de tus personajes\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="los_hilos">\n\n        <ion-card-header>\n\n          <ion-card-title class="titulos">Anecdotas</ion-card-title>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          Hilo para contar tus anecdotas, todos tenemos alguna\n\n        </ion-card-content>\n\n      </ion-card>\n\n  </ion-list>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\foro\foro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ForoPage);
    return ForoPage;
}());

//# sourceMappingURL=foro.js.map

/***/ })

});
//# sourceMappingURL=0.js.map