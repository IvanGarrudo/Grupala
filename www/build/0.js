webpackJsonp([0],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoPageModule", function() { return GrupoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grupo__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GrupoPageModule = /** @class */ (function () {
    function GrupoPageModule() {
    }
    GrupoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__grupo__["a" /* GrupoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__grupo__["a" /* GrupoPage */]),
            ],
        })
    ], GrupoPageModule);
    return GrupoPageModule;
}());

//# sourceMappingURL=grupo.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrupoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
    function GrupoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GrupoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GrupoPage');
    };
    GrupoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-grupo',template:/*ion-inline-start:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\grupo\grupo.html"*/'<!--\n\n  Generated template for the GrupoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Grupala</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Noticias</h3>\n\n\n\n  <ion-card>\n\n      <ion-card-content>\n\n          <div class="imagen">\n\n            <ion-icon name="chatboxes"></ion-icon>\n\n          </div>\n\n          <div class="mensaje">\n\n            PerezReverte a comentado: "3.5 es lo unico de D&D que se deberia considerar rol" en el hilo Manuales\n\n          </div>\n\n      </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <button ion-button  class="botoncito"  >Noticias</button>\n\n        <button ion-button    class="botoncito" >Foro</button>\n\n        <button ion-button   class="botoncito" >Eventos</button>\n\n        <button ion-button    class="botoncito" >Admin</button>\n\n        <button ion-button     class="botoncito" >Amigos</button>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\User\Desktop\Nueva carpeta\Grupala\src\pages\grupo\grupo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], GrupoPage);
    return GrupoPage;
}());

//# sourceMappingURL=grupo.js.map

/***/ })

});
//# sourceMappingURL=0.js.map