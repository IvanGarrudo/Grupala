webpackJsonp([0],{

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisEventosPageModule", function() { return MisEventosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mis_eventos__ = __webpack_require__(961);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MisEventosPageModule = /** @class */ (function () {
    function MisEventosPageModule() {
    }
    MisEventosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mis_eventos__["a" /* MisEventosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mis_eventos__["a" /* MisEventosPage */]),
            ],
        })
    ], MisEventosPageModule);
    return MisEventosPageModule;
}());

//# sourceMappingURL=mis-eventos.module.js.map

/***/ }),

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    function EventService() {
        this.events = [{ "nevent": "Gamers", "desc": "Bla bla bla bla bla bla bla bla bla bla ", "icon": "../../assets/img/space.png" }];
    }
    EventService.prototype.getGroup = function () {
        return this.events;
    };
    EventService.prototype.addGroup = function (value) {
        this.events.push(value);
    };
    EventService.prototype.updateGroup = function (value) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EventService);
    return EventService;
}());

//# sourceMappingURL=event.service.js.map

/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoEventoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service__ = __webpack_require__(959);
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
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nuevo-evento',template:/*ion-inline-start:"C:\Users\Alberto\Documents\GitHub\Grupala\src\pages\nuevo-evento\nuevo-evento.html"*/'<!--\n\n  Generated template for the NuevoEventoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Crear evento</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <form (ngSubmit)="onAddEvent(f.value)" #f="ngForm">\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label>Nombre</ion-label>\n\n          <ion-input type="text" placeholder="nombre" name="nevent" ngModel required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Descripción</ion-label>\n\n          <ion-input class="description"  type="text" placeholder="desc" name="desc" ngModel required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Icono</ion-label>\n\n            <ion-input type="file" name="icon" ngModel required></ion-input>\n\n           </ion-item>\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="!f.valid">Crear</button>\n\n    </form>\n\n    </ion-content>\n\n    '/*ion-inline-end:"C:\Users\Alberto\Documents\GitHub\Grupala\src\pages\nuevo-evento\nuevo-evento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */]])
    ], NuevoEventoPage);
    return NuevoEventoPage;
}());

//# sourceMappingURL=nuevo-evento.js.map

/***/ }),

/***/ 961:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisEventosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuevo_evento_nuevo_evento__ = __webpack_require__(960);
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
    function MisEventosPage(navCtrl, navParams, EventService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.EventService = EventService;
        this.events = [];
        this.searchTerm = "";
    }
    MisEventosPage.prototype.ionViewWillEnter = function () {
        this.events = this.EventService.getGroup();
    };
    MisEventosPage.prototype.onLoadEventPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__nuevo_evento_nuevo_evento__["a" /* NuevoEventoPage */]);
    };
    MisEventosPage.prototype.setFilteredItems = function () {
        this.events = this.EventService.filterItems(this.searchTerm);
    };
    MisEventosPage.prototype.ngOnInit = function () {
        this.setFilteredItems();
    };
    MisEventosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mis-eventos',template:/*ion-inline-start:"C:\Users\Alberto\Documents\GitHub\Grupala\src\pages\mis-eventos\mis-eventos.html"*/'<!--\n\n  Generated template for the MisEventosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>MisEventos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar animated [(ngModel)]="searchTerm" (ionChange)="setFilteredItems()"></ion-searchbar>\n\n\n\n\n\n  <ion-list>\n\n    <button ion-item *ngFor="let event of events">\n\n      <tr>\n\n        <td>\n\n            <ion-avatar><img [src]="event.icon"></ion-avatar>\n\n        </td>\n\n        <td>\n\n          <h2>{{event.nevent}}</h2>\n\n          <h3>{{event.desc}}</h3>\n\n        </td>\n\n      </tr>\n\n    </button>\n\n  </ion-list>\n\n  <button ion-button full color="secondary" (click)="onLoadEventPage()">Nuevo evento</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Alberto\Documents\GitHub\Grupala\src\pages\mis-eventos\mis-eventos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */]])
    ], MisEventosPage);
    return MisEventosPage;
}());

//# sourceMappingURL=mis-eventos.js.map

/***/ })

});
//# sourceMappingURL=0.js.map