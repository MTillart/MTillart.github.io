function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ajaarvestus/ajaarvestus.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ajaarvestus/ajaarvestus.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAjaarvestusAjaarvestusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>ajaarvestus works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div *ngIf=\"auth.isLoggedIn()\">{{currentUser.firstName}} {{currentUser.lastName}}</div> -->\n<!-- Kui authGuard on peal eemalda hüüumärgid currentUser-ilt -->\n<app-navbar *ngIf=\"auth.isLoggedIn()\"></app-navbar>\n<app-search *ngIf=\"auth.isLoggedIn()\"></app-search>\n\n<router-outlet>\n    \n</router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dashboard\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n\r\n<table >\r\n  <thead>\r\n    <tr>\r\n      <td>Ülesanded</td>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <td><mat-icon>home</mat-icon></td>\r\n    </tr>\r\n    <tr *ngFor=\"let item of dataSource1; let i = index\">\r\n\r\n      <td>\r\n        <mat-checkbox class=\"checkBox\" [checked]=\"item.isDone\"></mat-checkbox>\r\n        {{item.Task}}\r\n        \r\n      </td>\r\n    </tr>\r\n\r\n  </tbody>\r\n</table>\r\n\r\n<table>\r\n  <thead>\r\n    <tr> \r\n      <td class=\"kalender\">Kalender <a (click)=\"openDialog()\"><mat-icon>calendar_today</mat-icon></a></td>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let item of calendarData\">\r\n\r\n      <td>\r\n        <h5>{{item.eventDate | date:'MMMM d'}}</h5>\r\n        \r\n        <p><span>{{item.eventDate | date:'hh:mm '}} </span> {{item.task}}</p>\r\n      </td>\r\n    </tr>\r\n\r\n  </tbody>\r\n</table>\r\n\r\n<table>\r\n  <thead>\r\n    <tr>\r\n      <td>Käimas olevad tööd</td>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"\">\r\n      <td>\r\n        <mat-checkbox [checked]=\"item.isDone\"></mat-checkbox>\r\n        {{item.Task}}\r\n      </td>\r\n    </tr>\r\n\r\n  </tbody>\r\n</table>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dokumendid/dokumendid.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dokumendid/dokumendid.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDokumendidDokumendidComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form-group\">\n    <label for=\"file\">Vali fail üleslaadimiseks</label>\n    <input type=\"file\"\n           id=\"file\"\n           (change)=\"handleFileInput($event.target.files)\">\n</div>\n<div>\n    <ul>\n        <li>dokuemndi-plank.doc<mat-icon>arrow_downward</mat-icon></li>\n        <li>toimiku-põhi.doc<mat-icon>arrow_downward</mat-icon></li>\n        <li>kirja-plank.doc<mat-icon>arrow_downward</mat-icon></li>\n        <li>firma.doc<mat-icon>arrow_downward</mat-icon></li>\n    </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/isiku-pop-up/isiku-pop-up.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/isiku-pop-up/isiku-pop-up.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIsikuPopUpIsikuPopUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-dialog-content>\n\n\n<div class=\"container\" fxLayout=\"row\">\n<h3 class=\"close addMargin\" (click)=\"close()\">X</h3>    \n    <div class=\"info_sidebar\">\n        <ul class=\"details\">\n            <li>{{dataPerson.name}}</li>\n            <li>{{dataPerson.idCode}}</li>\n            <li>{{dataPerson.phone}}</li>\n            <li>{{dataPerson.email}}</li>\n            <li>{{dataPerson.company}}</li>\n            <li>{{dataPerson.address}}</li>\n        </ul>\n\n    </div>\n    <div class=\"main_panel\" fxLayout=\"column\">\n        <h5>Avatud toimikud<mat-icon color=\"accent\">add_box</mat-icon>\n        </h5>\n        <ul class=\"open_cases\">\n            <li>Toimik 1</li>\n            <li>Liiklustrahv</li>\n            <li>Toimik 13</li>\n        </ul>\n        <div class=\"bottom_class\">\n        <h5>Suletud toimikud</h5>\n        <ul class=\"closed_cases\">\n            <li>Toimik 22</li>\n            <li>Liiklustrahv#74</li>\n            <li>Toimik 13</li>\n        </ul>\n    </div>\n</div>\n\n</div>\n</mat-dialog-content>\n<mat-dialog-actions>\n<button mat-button (click)=changeClient(dataPerson._id)>Muuda andmeid</button>\n<button mat-button (click)=deleteClient(dataPerson._id)>Kustuta klient</button>\n</mat-dialog-actions>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/isikud/isikud.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/isikud/isikud.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIsikudIsikudComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"client_container\">\n    <mat-icon (click)=openAddClient() color=\"accent\">add_box</mat-icon>\n    <table>\n        <tbody>\n           <tr fxLayout=\"row\" fxLayoutGap=\"5px\" *ngFor=\"let item of clientsData\"> \n                \n                <td fxFlex=\"30\" class=\"clientName\" (click)=\"openClienView(item._id)\">{{item.name}}</td>\n                <td fxFlex=\"26\">{{item.phone}}</td>\n                <td fxFlex=\"15\">{{item.email}}</td>\n            </tr>\n        </tbody>\n    </table>\n    <!-- <button (click)= getClients()>KLIENDID</button> -->\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/kalender-pop-up/kalender-pop-up.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kalender-pop-up/kalender-pop-up.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppKalenderPopUpKalenderPopUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3 class=\"close\" (click)=\"close()\">X</h3>\n<h3 mat-dialog-title>Sündmuse sisestamine</h3>\n\n\n<mat-form-field [formGroup]=\"form\">\n    <input matInput formControlName=\"task\" required>\n    <mat-placeholder class=\"placeholder\">Sisesta sündmus</mat-placeholder>\n\n\n    <!-- <ul *ngFor=\"let item of dataArray\">\n        <li>{{item.Task}}</li>\n    </ul> -->\n</mat-form-field>\n<mat-dialog-content>\n    <div class=\"dialog_container\">\n        <div class=\"calendar-wrapper\">\n            <mat-calendar [dateClass]=\"dateClass()\" [selected]=\"form.get('eventDate').value\"\n                (selectedChange)=\"getSelectedDate($event)\" #calendar [(selected)]=\"selectedDate\">\n            </mat-calendar>\n        </div>\n\n        <div class=\"timepicker\">\n            <ngb-timepicker [ngModel]=\"time\" (ngModelChange)=\"logTime($event)\"></ngb-timepicker>\n        </div>\n    </div>\n\n\n</mat-dialog-content>\n<mat-dialog-actions>\n\n    <button class=\"mat-raised-button\" (click)=\"close()\">Close</button>\n    <button [disabled]=\"!form.dirty\" class=\"mat-raised-button mat-primary\" (click)=\"save()\">Save</button>\n</mat-dialog-actions>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/lisa-isik-pop-up/lisa-isik-pop-up.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lisa-isik-pop-up/lisa-isik-pop-up.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLisaIsikPopUpLisaIsikPopUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <h3 class=\"close\" (click)=\"close()\">X</h3> -->\n<h5 mat-dialog-title class=\"heading\">Sisesta andmed</h5>\n<mat-dialog-content [formGroup]=\"form\" (submit)=\"saveUser()\" >\n  <div class=\"container\">\n    <!-- <mat-checkbox (click)=\"addCompanyForm()\" formControlName=\"isCompany\">Ettevõte</mat-checkbox> -->\n    <div *ngIf=\"isCompany\" class=\"company\" formGroupName=\"companyData\">\n      <h6>Ettevõte andmed</h6>\n      <mat-form-field>\n        <input matInput placeholder=\"Ettevõte nimi\" formControlName=\"companyName\" id=\"companyName\" name=\"companyName\" required>\n        <mat-error>Täida väli</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Registrikood\" formControlName=\"companyCode\" id=\"companyCode\" name=\"companyCode\" required>\n        <mat-error *ngIf = \"companyCode.hasError('required')\">Täida väli</mat-error>\n        <mat-error *ngIf = \"companyCode.hasError('pattern')\">Ainult numbrid lubatud</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Ettevõte email\" formControlName=\"companyEmail\" id=\"companyEmail\" name=\"companyEmail\">\n        <mat-error>Täida väli</mat-error>\n      </mat-form-field>\n\n    </div>\n    \n    <div>\n      <h6 *ngIf=\"isCompany\">Ettevõte esindaja</h6>\n      <mat-form-field>\n        <input matInput placeholder=\"Nimi\" formControlName=\"name\" id=\"name\" name=\"name\" required>\n        <mat-error>Täida väli</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div>\n      <mat-form-field>\n        <input matInput placeholder=\"Isikukood\" formControlName=\"idCode\" id=\"idCode\" name=\"idCode\" required>\n        <mat-error *ngIf = \"idCode.hasError('required')\">Täida väli</mat-error>\n        <mat-error *ngIf = \"idCode.hasError('minlength')\">Peab olema 11 tähemärki</mat-error>\n        <mat-error *ngIf = \"idCode.hasError('maxlength')\">Woah, liiga palju tähemärke</mat-error>\n        <mat-error *ngIf = \"idCode.hasError('pattern')\">Ainult numbrid lubatud</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div>\n      <mat-form-field>\n        <input matInput placeholder=\"Email\" formControlName=\"email\" id=\"email\" name=\"email\" required>\n        <mat-error *ngIf = \"email.hasError('required')\">Täida väli</mat-error>\n        <mat-error *ngIf = \"email.hasError('email')\">Ei vasta mustrile</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div>\n      <mat-form-field>\n        <input matInput placeholder=\"Telefon\" formControlName=\"phone\" id=\"phone\" name=\"phone\" required>\n        <mat-error *ngIf = \"phone.hasError('required')\">Täida väli</mat-error>\n        <mat-error *ngIf = \"phone.hasError('pattern')\">Ainult numbrid lubatud</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div>\n      <mat-form-field>\n        <input matInput placeholder=\"Ettevõte\" formControlName=\"company\" id=\"company\" name=\"company\">\n      </mat-form-field>\n    </div>\n\n    <div>\n      <mat-form-field>\n        <input matInput placeholder=\"Aadress\" formControlName=\"address\" id=\"address\" name=\"address\" required>\n        <mat-error>Täida väli</mat-error>\n      </mat-form-field>\n    </div>\n    \n\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-stroked-button *ngIf=\"!editData\" [disabled]=\"!form.valid\" (click)=\"saveFormData()\" color=\"accent\">Kinnita</button>\n  <button mat-stroked-button *ngIf=\"editData\"[disabled]=\"!form.valid\" (click)=\"editFormData(editData._id)\" color=\"accent\">Kinnita muudatused</button>\n\n  <button (click)=\"close()\" mat-stroked-button color=\"accent\">Katkesta</button>\n</mat-dialog-actions>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form (submit)=\"login()\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-default\">Sign in!</button>\n  </form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mainBar\">\n    <div class=\"navbar\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutAlign.sm=\"start center\">\n            <div class=\"logo\" >\n                <img fxFlex=\"80\" src=\"../../assets/img/jaks_logo_{{iconTheme}}.svg\" routerLink = \"\" routerLinkActive = \"logo-active\"> \n            </div>\n            <div fxFlex=\"85\" fxFlex.lt-lg=\"80\" fxFlex.sm=\"70\" class=\"actionbar\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div class=\"isikud\" routerLinkActive = \"active\"><a routerLink = \"isikud\"><h4>Isikud</h4></a></div>\n                <div class=\"dokumendid\" routerLinkActive = \"active\"><a routerLink = \"dokumendid\" ><h4>Dokumendid</h4></a></div>\n                <div class=\"toimikud\" routerLinkActive = \"active\"><a routerLink = \"toimikud\" ><h4>Toimikud</h4></a></div>\n                <div class=\"ajaarvestus\" routerLinkActive = \"active\"><a routerLink = \"ajaarvestus\"><h4>Ajaarvestus</h4></a></div>\n                <div class=\"user-panel\" fxLayoutAlign=\"space-evenly\">                  \n                    <mat-slide-toggle class=\"toggle\" color=\"accent\" (click)= \"toggleTheme()\"><mat-icon color=\"accent\">invert_colors</mat-icon></mat-slide-toggle>\n                    <mat-icon color=\"primary\">mail</mat-icon>\n                   <mat-icon *ngIf=\"auth.isLoggedIn()\" (click)= \"logout()\">exit_to_app</mat-icon>\n                </div>\n            </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form (submit)=\"register()\">\n    <div class=\"form-group\">\n      <label for=\"name\">Full name</label>\n      <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter your name\" [(ngModel)]=\"credentials.name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-default\">Register!</button>\n  </form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"otsing\" fxLayout=\"row\" fxLayoutAlign=\"end center\"> \n    <mat-form-field appearance=\"outline\">\n        <input matInput placeholder=\"otsing... \">\n       </mat-form-field>  \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/toimikud/toimikud.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toimikud/toimikud.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppToimikudToimikudComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>toimikud works!</p>\n\n<h2>{{ dateObj | date:'MMMM d' }}</h2>\n\n<h5>{{date}}</h5>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/_helpers/_auth.guard.ts":
  /*!*****************************************!*\
    !*** ./src/app/_helpers/_auth.guard.ts ***!
    \*****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcApp_helpers_authGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/authentication.service */
    "./src/app/_services/authentication.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(auth, router) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            return false;
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/_helpers/custom-date-adapter.ts":
  /*!*************************************************!*\
    !*** ./src/app/_helpers/custom-date-adapter.ts ***!
    \*************************************************/

  /*! exports provided: CustomDateAdapter */

  /***/
  function srcApp_helpersCustomDateAdapterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomDateAdapter", function () {
      return CustomDateAdapter;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js"); // File for customising  calendar and data for Estonian needs
    // for calendar to start on Monday


    var CustomDateAdapter =
    /*#__PURE__*/
    function (_angular_material__WE) {
      _inherits(CustomDateAdapter, _angular_material__WE);

      function CustomDateAdapter() {
        _classCallCheck(this, CustomDateAdapter);

        return _possibleConstructorReturn(this, _getPrototypeOf(CustomDateAdapter).apply(this, arguments));
      }

      _createClass(CustomDateAdapter, [{
        key: "getFirstDayOfWeek",
        value: function getFirstDayOfWeek() {
          return 1;
        }
      }]);

      return CustomDateAdapter;
    }(_angular_material__WEBPACK_IMPORTED_MODULE_1__["NativeDateAdapter"]);
    /***/

  },

  /***/
  "./src/app/_models/client.ts":
  /*!***********************************!*\
    !*** ./src/app/_models/client.ts ***!
    \***********************************/

  /*! exports provided: Client */

  /***/
  function srcApp_modelsClientTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Client", function () {
      return Client;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Client = function Client(_Name, _Email, _IdCode, _Phone, _IsCompany, _Address, _Company) {
      _classCallCheck(this, Client);

      this._Name = _Name;
      this._Email = _Email;
      this._IdCode = _IdCode;
      this._Phone = _Phone;
      this._IsCompany = _IsCompany;
      this._Address = _Address;
      this._Company = _Company;
      this.name = this._Name;
      this.email = this._Email;
      this.idCode = this._IdCode, this.isCompany = this._IsCompany, this.company = this._Company, this.phone = this._Phone, this.address = this._Address;
    }; // export class Client {
    //   _id: string;
    //   name: string;
    //   email: string;
    //   idCode: number;
    //   isCompany: boolean;
    //   company?: string;
    //   phone: number;
    //   address?: string;
    //   constructor(
    //     name: string,
    //     email: string,
    //     idCode: number,
    //     isCompany: boolean,
    //     company?: string,
    //     phone?: number,
    //     address?: string,
    //   ) {
    //     this.name = this.name;
    //     this.email = this.email;
    //     this.idCode = this.idCode,
    //       this.isCompany = this.isCompany,
    //       this.company = this.company,
    //       this.phone = this.phone,
    //       this.address = this.address
    //   }

    /***/

  },

  /***/
  "./src/app/_services/authentication.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/_services/authentication.service.ts ***!
    \*****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcApp_servicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(http, router) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.router = router;
      }

      _createClass(AuthenticationService, [{
        key: "saveToken",
        value: function saveToken(token) {
          localStorage.setItem('token', token);
          this.token = token;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          if (!this.token) {
            this.token = localStorage.getItem('token');
          }

          return this.token;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.token = '';
          window.localStorage.removeItem('token');
          this.router.navigateByUrl('/login');
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          var token = this.getToken();
          var payload;

          if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
          } else {
            return null;
          }
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var user = this.getUserDetails();

          if (user) {
            user.exp = Date.now() / 1000;
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "request",
        value: function request(method, type, user) {
          var _this = this;

          var base;

          if (method === 'post') {
            base = this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/user/".concat(type), user);
          } else {
            base = this.http.get("/user/".concat(type), {
              headers: {
                Authorization: "Bearer ".concat(this.getToken())
              }
            });
          }

          var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data.token) {
              _this.saveToken(data.token);
            }

            return data;
          }));
          return request;
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.request('post', 'register', user);
        }
      }, {
        key: "login",
        value: function login(user) {
          var loggedIn = this.isLoggedIn();
          console.log("LoggedIN??? " + loggedIn);
          return this.request('post', 'login', user);
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/_services/clients.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/_services/clients.service.ts ***!
    \**********************************************/

  /*! exports provided: ClientsService */

  /***/
  function srcApp_servicesClientsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsService", function () {
      return ClientsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var ClientsService =
    /*#__PURE__*/
    function () {
      function ClientsService(http, router, auth) {
        _classCallCheck(this, ClientsService);

        this.http = http;
        this.router = router;
        this.auth = auth;
      }

      _createClass(ClientsService, [{
        key: "getAllClients",
        value: function getAllClients() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/clients");
        }
      }, {
        key: "addClient",
        value: function addClient(client) {
          console.log("??????");
          console.log("Adding client");
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/client", client);
        }
      }, {
        key: "getClient",
        value: function getClient(clientId) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/client/".concat(clientId));
        }
      }, {
        key: "changeClient",
        value: function changeClient(clientId, client) {
          return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/client/".concat(clientId), client);
        }
      }, {
        key: "deleteClient",
        value: function deleteClient(clientId) {
          return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/client/".concat(clientId), {
            responseType: 'text'
          });
        }
      }]);

      return ClientsService;
    }();

    ClientsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    ClientsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ClientsService);
    /***/
  },

  /***/
  "./src/app/_services/file-upload.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/_services/file-upload.service.ts ***!
    \**************************************************/

  /*! exports provided: FileUploadService */

  /***/
  function srcApp_servicesFileUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadService", function () {
      return FileUploadService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var FileUploadService =
    /*#__PURE__*/
    function () {
      function FileUploadService(http, router, auth) {
        _classCallCheck(this, FileUploadService);

        this.http = http;
        this.router = router;
        this.auth = auth;
      }

      _createClass(FileUploadService, [{
        key: "postFile",
        value: function postFile(fileToUpload) {
          var endpoint = 'your-destination-url';
          var formData = new FormData();
          formData.append('fileKey', fileToUpload, fileToUpload.name);
          return this.http.post(endpoint, formData, {
            headers: {
              Authorization: "Bearer ".concat(this.auth.getToken())
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            return true;
          }));
        }
      }]);

      return FileUploadService;
    }();

    FileUploadService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    FileUploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FileUploadService);
    /***/
  },

  /***/
  "./src/app/_services/interceptor.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/_services/interceptor.service.ts ***!
    \**************************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcApp_servicesInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/_services/authentication.service.ts");

    var TokenInterceptor =
    /*#__PURE__*/
    function () {
      function TokenInterceptor(auth) {
        _classCallCheck(this, TokenInterceptor);

        this.auth = auth;
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          request = request.clone({
            setHeaders: {
              Authorization: "Bearer ".concat(this.auth.getToken())
            }
          });
          return next.handle(request);
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TokenInterceptor);
    /***/
  },

  /***/
  "./src/app/ajaarvestus/ajaarvestus.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/ajaarvestus/ajaarvestus.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAjaarvestusAjaarvestusComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FqYWFydmVzdHVzL2FqYWFydmVzdHVzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ajaarvestus/ajaarvestus.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/ajaarvestus/ajaarvestus.component.ts ***!
    \******************************************************/

  /*! exports provided: AjaarvestusComponent */

  /***/
  function srcAppAjaarvestusAjaarvestusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjaarvestusComponent", function () {
      return AjaarvestusComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AjaarvestusComponent =
    /*#__PURE__*/
    function () {
      function AjaarvestusComponent() {
        _classCallCheck(this, AjaarvestusComponent);
      }

      _createClass(AjaarvestusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AjaarvestusComponent;
    }();

    AjaarvestusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ajaarvestus',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ajaarvestus.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ajaarvestus/ajaarvestus.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ajaarvestus.component.scss */
      "./src/app/ajaarvestus/ajaarvestus.component.scss")).default]
    })], AjaarvestusComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _isikud_isikud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./isikud/isikud.component */
    "./src/app/isikud/isikud.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _dokumendid_dokumendid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dokumendid/dokumendid.component */
    "./src/app/dokumendid/dokumendid.component.ts");
    /* harmony import */


    var _ajaarvestus_ajaarvestus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ajaarvestus/ajaarvestus.component */
    "./src/app/ajaarvestus/ajaarvestus.component.ts");
    /* harmony import */


    var _toimikud_toimikud_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./toimikud/toimikud.component */
    "./src/app/toimikud/toimikud.component.ts");
    /* harmony import */


    var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./_helpers/_auth.guard */
    "./src/app/_helpers/_auth.guard.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");

    var routes = [{
      path: '',
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
      children: [{
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
      }, {
        path: 'isikud',
        component: _isikud_isikud_component__WEBPACK_IMPORTED_MODULE_3__["IsikudComponent"]
      }, {
        path: 'dokumendid',
        component: _dokumendid_dokumendid_component__WEBPACK_IMPORTED_MODULE_5__["DokumendidComponent"]
      }, {
        path: 'toimikud',
        component: _toimikud_toimikud_component__WEBPACK_IMPORTED_MODULE_7__["ToimikudComponent"]
      }, {
        path: 'ajaarvestus',
        component: _ajaarvestus_ajaarvestus_component__WEBPACK_IMPORTED_MODULE_6__["AjaarvestusComponent"]
      }]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"]
    }, // otherwise redirect to home
    {
      path: '**',
      redirectTo: '/',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFByb2dyYW1taW5nXFxMw7VwdXTDtsO2XFxGcm9udF9lbmRcXGxvcHV0b28vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4iLCJib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./_services/authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(elementRef, router, auth) {
        _classCallCheck(this, AppComponent);

        this.elementRef = elementRef;
        this.router = router;
        this.auth = auth;
        this.title = 'loputoo';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("INIT");
          this.currentUser = this.auth.getUserDetails();
          console.log("CU: " + this.currentUser);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _isikud_isikud_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./isikud/isikud.component */
    "./src/app/isikud/isikud.component.ts");
    /* harmony import */


    var _dokumendid_dokumendid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./dokumendid/dokumendid.component */
    "./src/app/dokumendid/dokumendid.component.ts");
    /* harmony import */


    var _toimikud_toimikud_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./toimikud/toimikud.component */
    "./src/app/toimikud/toimikud.component.ts");
    /* harmony import */


    var _ajaarvestus_ajaarvestus_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./ajaarvestus/ajaarvestus.component */
    "./src/app/ajaarvestus/ajaarvestus.component.ts");
    /* harmony import */


    var _kalender_pop_up_kalender_pop_up_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./kalender-pop-up/kalender-pop-up.component */
    "./src/app/kalender-pop-up/kalender-pop-up.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _helpers_custom_date_adapter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./_helpers/custom-date-adapter */
    "./src/app/_helpers/custom-date-adapter.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _isiku_pop_up_isiku_pop_up_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./isiku-pop-up/isiku-pop-up.component */
    "./src/app/isiku-pop-up/isiku-pop-up.component.ts");
    /* harmony import */


    var _lisa_isik_pop_up_lisa_isik_pop_up_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./lisa-isik-pop-up/lisa-isik-pop-up.component */
    "./src/app/lisa-isik-pop-up/lisa-isik-pop-up.component.ts");
    /* harmony import */


    var _services_interceptor_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./_services/interceptor.service */
    "./src/app/_services/interceptor.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"], _isikud_isikud_component__WEBPACK_IMPORTED_MODULE_11__["IsikudComponent"], _dokumendid_dokumendid_component__WEBPACK_IMPORTED_MODULE_12__["DokumendidComponent"], _toimikud_toimikud_component__WEBPACK_IMPORTED_MODULE_13__["ToimikudComponent"], _ajaarvestus_ajaarvestus_component__WEBPACK_IMPORTED_MODULE_14__["AjaarvestusComponent"], _kalender_pop_up_kalender_pop_up_component__WEBPACK_IMPORTED_MODULE_15__["KalenderPopUpComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"], _isiku_pop_up_isiku_pop_up_component__WEBPACK_IMPORTED_MODULE_23__["IsikuPopUpComponent"], _lisa_isik_pop_up_lisa_isik_pop_up_component__WEBPACK_IMPORTED_MODULE_24__["LisaIsikPopUpComponent"]],
      entryComponents: [_kalender_pop_up_kalender_pop_up_component__WEBPACK_IMPORTED_MODULE_15__["KalenderPopUpComponent"], _isiku_pop_up_isiku_pop_up_component__WEBPACK_IMPORTED_MODULE_23__["IsikuPopUpComponent"], _lisa_isik_pop_up_lisa_isik_pop_up_component__WEBPACK_IMPORTED_MODULE_24__["LisaIsikPopUpComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"],
        useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_25__["TokenInterceptor"],
        multi: true
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE"],
        useValue: 'est'
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
        useClass: _helpers_custom_date_adapter__WEBPACK_IMPORTED_MODULE_21__["CustomDateAdapter"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@font-face {\n  font-family: \"Saira\";\n  src: url(\"/assets/font/Saira-Regular.ttf\");\n}\n* {\n  font-family: \"Saira\";\n  font-style: normal;\n  font-weight: normal;\n}\nmat-icon {\n  font-family: \"Material Icons\" !important;\n}\n.dashboard {\n  display: inline-block;\n  height: 600px;\n  background-color: var(--background-secondary);\n  border-radius: 5px;\n  border-right: 1px solid var(--grid-primary);\n  margin: 30px;\n}\ntable {\n  width: 100%;\n  height: 100%;\n  border-collapse: collapse;\n  display: inline-block;\n  border-left: 1px solid var(--grid-primary);\n  border-top: 1px solid var(--grid-primary);\n  border-bottom: 1px solid var(--grid-primary);\n}\ntable thead {\n  text-align: center;\n  display: inline-table;\n  color: var(--text-primary);\n  width: 100%;\n  border-bottom: 1px solid var(--grid-primary);\n  height: 45px;\n}\ntable tr {\n  border-collapse: collapse;\n  border-bottom-width: 0;\n  color: var(--text-primary);\n}\ntable tr td {\n  padding-left: 15px;\n}\n.kalender {\n  display: unset;\n}\nmat-icon {\n  margin: 0;\n  padding: 0;\n  font-size: 30px;\n}\n::ng-deep .mat-checkbox .mat-checkbox-frame {\n  border-color: var(--text-grey);\n}\nmat-checkbox ::ng-deep .mat-checkbox-inner-container {\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxQcm9ncmFtbWluZ1xcTMO1cHV0w7bDtlxcRnJvbnRfZW5kXFxsb3B1dG9vL3NyY1xcc3R5bGVzXFxiYXNlXFxfdHlwb2dyYXBoeS5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvQzpcXFByb2dyYW1taW5nXFxMw7VwdXTDtsO2XFxGcm9udF9lbmRcXGxvcHV0b28vc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0ksb0JBQUE7RUFDQSwwQ0FBQTtBQ1RKO0FEWUE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNWSjtBRGNHO0VBQ0Msd0NBQUE7QUNYSjtBQ1ZBO0VBRUUscUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkNBQUE7RUFFQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtBRFdGO0FDUkE7RUFDRSxXQUFBO0VBRUEsWUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNENBQUE7QURVRjtBQ05FO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtBRFFKO0FDTkU7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QURRSjtBQ1BJO0VBQ0Usa0JBQUE7QURTTjtBQ0pBO0VBQ0UsY0FBQTtBRE9GO0FDTEE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QURRRjtBQ05BO0VBQ0UsOEJBQUE7QURTRjtBQ1BBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QURVRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1ibHVlOiAjMTg1M0FCOyAvL21haW4gdGV4dCBhbmQgaWNvbiBjb2xvclxyXG4kc2Vjb25kYXJ5LWJsdWU6ICMwMDM4RkY7XHJcblxyXG4kcHJpbWFyeS1ncmV5OiAjNzY3Njc2O1xyXG4kc2Vjb25kYXJ5LWdyZXk6ICNCNEI2QkIgOyAvL2xpbmVzLCBncmlkcyBhbmQgc3VjaFxyXG5cclxuJHByaW1hcnktYmc6ICNGRUZFRkU7IC8vYmFja2dyb3VuZCwgYW5kIHRleHRzIGluIGRhcmsgYmdcclxuXHJcblxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1NhaXJhJztcclxuICAgIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnQvU2FpcmEtUmVndWxhci50dGYnKTtcclxuICB9XHJcblxyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2FpcmEnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIC8vZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLy9saW5lLWhlaWdodDogMjBweDtcclxuICAgfVxyXG4gICBtYXQtaWNvbntcclxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnICFpbXBvcnRhbnQ7IC8vaW1wb3J0YW50IGZvciBpY29ucyB0byB3b3JrXHJcbn1cclxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNhaXJhXCI7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250L1NhaXJhLVJlZ3VsYXIudHRmXCIpO1xufVxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIlNhaXJhXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxubWF0LWljb24ge1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiICFpbXBvcnRhbnQ7XG59XG5cbi5kYXNoYm9hcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ncmlkLXByaW1hcnkpO1xuICBtYXJnaW46IDMwcHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWdyaWQtcHJpbWFyeSk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ncmlkLXByaW1hcnkpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JpZC1wcmltYXJ5KTtcbn1cbnRhYmxlIHRoZWFkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyaWQtcHJpbWFyeSk7XG4gIGhlaWdodDogNDVweDtcbn1cbnRhYmxlIHRyIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG59XG50YWJsZSB0ciB0ZCB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLmthbGVuZGVyIHtcbiAgZGlzcGxheTogdW5zZXQ7XG59XG5cbm1hdC1pY29uIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWNoZWNrYm94IC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICBib3JkZXItY29sb3I6IHZhcigtLXRleHQtZ3JleSk7XG59XG5cbm1hdC1jaGVja2JveCA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1pbm5lci1jb250YWluZXIge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufSIsIkBpbXBvcnQgXCJiYXNlL3R5cG9ncmFwaHlcIjtcclxuXHJcbi5kYXNoYm9hcmQge1xyXG4gIC8vd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gIC8vYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JpZC1wcmltYXJ5KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tZ3JpZC1wcmltYXJ5KTtcclxuICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICAvL2Rpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZ3JpZC1wcmltYXJ5KTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZ3JpZC1wcmltYXJ5KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JpZC1wcmltYXJ5KTtcclxuXHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBSRUQ7XHJcblxyXG4gIHRoZWFkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JpZC1wcmltYXJ5KTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICB9XHJcbiAgdHIge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgIHRkIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmthbGVuZGVyIHtcclxuICBkaXNwbGF5OiB1bnNldDtcclxufVxyXG5tYXQtaWNvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWNoZWNrYm94IC5tYXQtY2hlY2tib3gtZnJhbWUge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dC1ncmV5KTtcclxufVxyXG5tYXQtY2hlY2tib3ggOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtaW5uZXItY29udGFpbmVyIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _kalender_pop_up_kalender_pop_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../kalender-pop-up/kalender-pop-up.component */
    "./src/app/kalender-pop-up/kalender-pop-up.component.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(dialog) {
        _classCallCheck(this, DashboardComponent);

        this.dialog = dialog;
        this.dataSource1 = DASH_DATA1;
        this.columnsToDisplay = ['Task'];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.sortedArray();
          console.log("The sorted dates are: ");
          this.calendarData = calenderDates;
          this.sortObjects(this.calendarData);
          console.log(calenderDates);
        }
      }, {
        key: "sortedArray",
        value: function sortedArray() {
          // Sort the array by date acending (jan->dec)
          console.log("Sorting array");
          return calenderDates.sort(function (a, b) {
            return new Date(a.eventDate) - new Date(b.eventDate);
          });
        }
      }, {
        key: "sortObjects",
        value: function sortObjects(array) {
          var _this2 = this;

          array.forEach(function (element, index) {
            console.log(element.eventDate.getFullYear());
            console.log(element.eventDate.getMonth());
            console.log(element.eventDate.getDate());

            if (array.findIndex(function (i) {
              return i.eventDate.getFullYear() == element.eventDate.getFullYear();
            }) === 0 && array.findIndex(function (i) {
              return i.eventDate.getMonth() == element.eventDate.getMonth();
            }) === 0 && array.findIndex(function (i) {
              return i.eventDate.getDate() == element.eventDate.getDate();
            }) === 0) {
              console.log("Ther was a similar object" + element.eventDate);
              _this2.newCalendarData;
            } else {
              console.log("no similar objects");
            }
          });
        } // Open pop-up and configur it. Send data

      }, {
        key: "openDialog",
        value: function openDialog() {
          var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
          dialogConfig.disableClose = true;
          dialogConfig.height = "600px";
          dialogConfig.width = "600px";
          dialogConfig.hasBackdrop = true;
          dialogConfig.panelClass = 'calendarBox'; //dialogConfig.autoFocus = true;
          //   dialogConfig.data = {
          //     id: 1,
          //     title: 'Kalender'
          // };
          //dialogConfig.data = DASH_DATA;

          this.dialog.open(_kalender_pop_up_kalender_pop_up_component__WEBPACK_IMPORTED_MODULE_3__["KalenderPopUpComponent"], dialogConfig);
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/dashboard/dashboard.component.scss")).default]
    })], DashboardComponent);
    var calenderDates = [{
      eventDate: new Date(),
      task: "Comand the Normandy"
    }, {
      eventDate: new Date(2020, 0, 13, 13, 0),
      task: "Shoot disks with Vak"
    }, {
      eventDate: new Date(2020, 5, 10, 15, 0),
      task: "Protheans art"
    }, {
      eventDate: new Date(2020, 5, 10, 14, 21),
      task: "Poems with Wrex"
    }];
    var DASH_DATA1 = [{
      Task: "Esita dokument A",
      isDone: false
    }, {
      Task: "Esita dokument B",
      isDone: false
    }, {
      Task: "Saada email",
      isDone: true
    }, {
      Task: "Korrasta sahtleid",
      isDone: false
    }, {
      Task: "Toimik 59 ülevaadata",
      isDone: true
    }, {
      Task: "Tõnu Tõru?",
      isDone: false
    }, {
      Task: "Tõnu Tõru?",
      isDone: false
    }, {
      Task: "Tõnu Tõru?",
      isDone: false
    }, {
      Task: "Tõnu Tõru?",
      isDone: false
    }];
    /***/
  },

  /***/
  "./src/app/dokumendid/dokumendid.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/dokumendid/dokumendid.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDokumendidDokumendidComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rva3VtZW5kaWQvZG9rdW1lbmRpZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/dokumendid/dokumendid.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/dokumendid/dokumendid.component.ts ***!
    \****************************************************/

  /*! exports provided: DokumendidComponent */

  /***/
  function srcAppDokumendidDokumendidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DokumendidComponent", function () {
      return DokumendidComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_file_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/file-upload.service */
    "./src/app/_services/file-upload.service.ts");

    var DokumendidComponent =
    /*#__PURE__*/
    function () {
      function DokumendidComponent(fileUploadService) {
        _classCallCheck(this, DokumendidComponent);

        this.fileUploadService = fileUploadService;
        this.fileToUpload = null;
      }

      _createClass(DokumendidComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleFileInput",
        value: function handleFileInput(files) {
          this.fileToUpload = files.item(0);
        }
      }, {
        key: "uploadFileToActivity",
        value: function uploadFileToActivity() {
          this.fileUploadService.postFile(this.fileToUpload).subscribe(function (data) {// do something, if upload success
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return DokumendidComponent;
    }();

    DokumendidComponent.ctorParameters = function () {
      return [{
        type: _services_file_upload_service__WEBPACK_IMPORTED_MODULE_2__["FileUploadService"]
      }];
    };

    DokumendidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dokumendid',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dokumendid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dokumendid/dokumendid.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dokumendid.component.scss */
      "./src/app/dokumendid/dokumendid.component.scss")).default]
    })], DokumendidComponent);
    /***/
  },

  /***/
  "./src/app/isiku-pop-up/isiku-pop-up.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/isiku-pop-up/isiku-pop-up.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppIsikuPopUpIsikuPopUpComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  position: relative;\n}\n\n.addMargin {\n  position: absolute;\n  right: 0;\n  margin: 20px;\n}\n\n.info_sidebar {\n  width: 30%;\n  height: 60vh;\n  border-right: 2px solid green;\n}\n\n.details {\n  font-size: 14px;\n  padding: 53px 10px 0 30px;\n}\n\nul li {\n  list-style-type: none;\n}\n\n.main_panel {\n  padding: 15px 10px 0 20px;\n}\n\n.open_cases {\n  font-size: 14px;\n  padding: 0 10px 30px 30px;\n}\n\n.bottom_class {\n  padding-top: 50%;\n  color: var(--calendar-text-secondary);\n}\n\n.closed_cases {\n  font-size: 10px;\n  padding: 0 10px 10px 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNpa3UtcG9wLXVwL0M6XFxQcm9ncmFtbWluZ1xcTMO1cHV0w7bDtlxcRnJvbnRfZW5kXFxsb3B1dG9vL3NyY1xcYXBwXFxpc2lrdS1wb3AtdXBcXGlzaWt1LXBvcC11cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaXNpa3UtcG9wLXVwL2lzaWt1LXBvcC11cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUVBLDZCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUNFSjs7QURDQTtFQUNJLHFCQUFBO0FDRUo7O0FEQUE7RUFDSSx5QkFBQTtBQ0dKOztBREFBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtFQUNBLHFDQUFBO0FDSUo7O0FEREE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2lzaWt1LXBvcC11cC9pc2lrdS1wb3AtdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBcclxufVxyXG4uYWRkTWFyZ2lue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuLmluZm9fc2lkZWJhcntcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGdyZWVuO1xyXG59XHJcbi5kZXRhaWxze1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogNTNweCAxMHB4IDAgMzBweCA7XHJcblxyXG59XHJcbnVsIGxpe1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbi5tYWluX3BhbmVse1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4IDAgMjBweDtcclxuICAgIFxyXG59XHJcbi5vcGVuX2Nhc2Vze1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMCAxMHB4IDMwcHggMzBweCA7XHJcbn1cclxuLmJvdHRvbV9jbGFzc3tcclxuICAgIHBhZGRpbmctdG9wOjUwJTtcclxuICAgIGNvbG9yOiB2YXIoLS1jYWxlbmRhci10ZXh0LXNlY29uZGFyeSk7XHJcblxyXG59XHJcbi5jbG9zZWRfY2FzZXN7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHggMTBweCAzMHB4IDtcclxufVxyXG5cclxuIiwiLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFkZE1hcmdpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmluZm9fc2lkZWJhciB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogNjB2aDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgZ3JlZW47XG59XG5cbi5kZXRhaWxzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA1M3B4IDEwcHggMCAzMHB4O1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLm1haW5fcGFuZWwge1xuICBwYWRkaW5nOiAxNXB4IDEwcHggMCAyMHB4O1xufVxuXG4ub3Blbl9jYXNlcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMCAxMHB4IDMwcHggMzBweDtcbn1cblxuLmJvdHRvbV9jbGFzcyB7XG4gIHBhZGRpbmctdG9wOiA1MCU7XG4gIGNvbG9yOiB2YXIoLS1jYWxlbmRhci10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5jbG9zZWRfY2FzZXMge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDMwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/isiku-pop-up/isiku-pop-up.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/isiku-pop-up/isiku-pop-up.component.ts ***!
    \********************************************************/

  /*! exports provided: IsikuPopUpComponent */

  /***/
  function srcAppIsikuPopUpIsikuPopUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsikuPopUpComponent", function () {
      return IsikuPopUpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services_clients_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/clients.service */
    "./src/app/_services/clients.service.ts");
    /* harmony import */


    var _lisa_isik_pop_up_lisa_isik_pop_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../lisa-isik-pop-up/lisa-isik-pop-up.component */
    "./src/app/lisa-isik-pop-up/lisa-isik-pop-up.component.ts");

    var IsikuPopUpComponent =
    /*#__PURE__*/
    function () {
      function IsikuPopUpComponent(dialogRef, data, dialog, clientService, isikuPopup) {
        _classCallCheck(this, IsikuPopUpComponent);

        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.clientService = clientService;
        this.isikuPopup = isikuPopup;
        this.dataPerson = data;
      }

      _createClass(IsikuPopUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getClient",
        value: function getClient(clientId) {
          var _this3 = this;

          this.clientService.getClient(clientId).subscribe(function (data) {
            _this3.dataPerson = data;
            console.log("Data updated!");
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "deleteClient",
        value: function deleteClient(clientId) {
          console.log("ID: " + clientId);
          this.clientService.deleteClient(clientId).subscribe(function () {
            return console.log("Client with id = ".concat(clientId, " deleted"));
          }, function (err) {
            return console.log(err);
          });
          this.dialogRef.close();
        }
      }, {
        key: "changeClient",
        value: function changeClient(clientId) {
          var _this4 = this;

          var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
          dialogConfig.disableClose = false;
          dialogConfig.height = "600px";
          dialogConfig.width = "350px";
          dialogConfig.hasBackdrop = true;
          dialogConfig.panelClass = 'dialogBox';
          dialogConfig.data = this.dataPerson;
          this.dialog.open(_lisa_isik_pop_up_lisa_isik_pop_up_component__WEBPACK_IMPORTED_MODULE_4__["LisaIsikPopUpComponent"], dialogConfig).afterClosed().subscribe(function (result) {
            console.log("Dialog closed");

            _this4.getClient(clientId);
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return IsikuPopUpComponent;
    }();

    IsikuPopUpComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _services_clients_service__WEBPACK_IMPORTED_MODULE_3__["ClientsService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }];
    };

    IsikuPopUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-isiku-pop-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./isiku-pop-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/isiku-pop-up/isiku-pop-up.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./isiku-pop-up.component.scss */
      "./src/app/isiku-pop-up/isiku-pop-up.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], IsikuPopUpComponent);
    /***/
  },

  /***/
  "./src/app/isikud/isikud.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/isikud/isikud.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppIsikudIsikudComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".client_container {\n  height: 600px;\n  background-color: var(--background-secondary);\n  border-radius: 5px;\n  border-right: 1px solid var(--grid-primary);\n  margin: 30px;\n}\n.client_container mat-icon {\n  margin: 10px 0px 0 50px;\n  cursor: pointer;\n}\ntable {\n  margin: 0 50px 10px 50px;\n  border: 1px solid var(--grid-primary);\n  border-collapse: collapse;\n  width: 80%;\n}\ntable td {\n  color: var(--text-primary);\n  border-left: 1px solid var(--grid-primary);\n  padding-left: 10px;\n}\n.clientId {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.clientName:hover {\n  cursor: pointer;\n  color: var(--text-secondary);\n  text-shadow: var(--background-hover-shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNpa3VkL0M6XFxQcm9ncmFtbWluZ1xcTMO1cHV0w7bDtlxcRnJvbnRfZW5kXFxsb3B1dG9vL3NyY1xcYXBwXFxpc2lrdWRcXGlzaWt1ZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaXNpa3VkL2lzaWt1ZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQUE7RUFDQSw2Q0FBQTtFQUVBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0FDREo7QURHSTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtBQ0RSO0FESUE7RUFDSSx3QkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDREo7QURHQTtFQUNJLDBCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0o7QURDQTtFQUNJLGVBQUE7RUFDQSw0QkFBQTtFQUVBLDJDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9pc2lrdWQvaXNpa3VkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWVudF9jb250YWluZXIge1xyXG4gICAgLy9kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgLy9ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmlkLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tZ3JpZC1wcmltYXJ5KTtcclxuICAgIG1hcmdpbjogMzBweDtcclxuICAgIFxyXG4gICAgbWF0LWljb257XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAwIDUwcHggO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG50YWJsZSB7XHJcbiAgICBtYXJnaW46IDAgNTBweCAxMHB4IDUwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmlkLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxudGFibGUgdGQge1xyXG4gICAgY29sb3I6dmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZ3JpZC1wcmltYXJ5KTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4uY2xpZW50SWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jbGllbnROYW1lOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1zaGFkb3c6IHZhcigtLWJhY2tncm91bmQtaG92ZXItc2hhZG93KTs7XHJcbn1cclxuIiwiLmNsaWVudF9jb250YWluZXIge1xuICBoZWlnaHQ6IDYwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tZ3JpZC1wcmltYXJ5KTtcbiAgbWFyZ2luOiAzMHB4O1xufVxuLmNsaWVudF9jb250YWluZXIgbWF0LWljb24ge1xuICBtYXJnaW46IDEwcHggMHB4IDAgNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50YWJsZSB7XG4gIG1hcmdpbjogMCA1MHB4IDEwcHggNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JpZC1wcmltYXJ5KTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDgwJTtcbn1cblxudGFibGUgdGQge1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ncmlkLXByaW1hcnkpO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jbGllbnRJZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2xpZW50TmFtZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgdGV4dC1zaGFkb3c6IHZhcigtLWJhY2tncm91bmQtaG92ZXItc2hhZG93KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/isikud/isikud.component.ts":
  /*!********************************************!*\
    !*** ./src/app/isikud/isikud.component.ts ***!
    \********************************************/

  /*! exports provided: IsikudComponent */

  /***/
  function srcAppIsikudIsikudComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsikudComponent", function () {
      return IsikudComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _isiku_pop_up_isiku_pop_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../isiku-pop-up/isiku-pop-up.component */
    "./src/app/isiku-pop-up/isiku-pop-up.component.ts");
    /* harmony import */


    var _lisa_isik_pop_up_lisa_isik_pop_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../lisa-isik-pop-up/lisa-isik-pop-up.component */
    "./src/app/lisa-isik-pop-up/lisa-isik-pop-up.component.ts");
    /* harmony import */


    var _services_clients_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_services/clients.service */
    "./src/app/_services/clients.service.ts");

    var IsikudComponent =
    /*#__PURE__*/
    function () {
      function IsikudComponent(dialog, clientService) {
        _classCallCheck(this, IsikudComponent);

        this.dialog = dialog;
        this.clientService = clientService;
      }

      _createClass(IsikudComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getClients();
        }
      }, {
        key: "getClients",
        value: function getClients() {
          var _this5 = this;

          console.log("Init for the clients");
          this.clientService.getAllClients().subscribe(function (data) {
            _this5.clientsData = data;
          }, function (error) {
            console.log(error);
          });
          console.log(this.clientsData);
        }
      }, {
        key: "openAddClient",
        value: function openAddClient() {
          var _this6 = this;

          var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
          dialogConfig.disableClose = false;
          dialogConfig.height = "600px";
          dialogConfig.width = "350px";
          dialogConfig.hasBackdrop = true;
          dialogConfig.panelClass = 'dialogBox';
          this.dialog.open(_lisa_isik_pop_up_lisa_isik_pop_up_component__WEBPACK_IMPORTED_MODULE_4__["LisaIsikPopUpComponent"], dialogConfig).afterClosed().subscribe(function (result) {
            console.log("Dialog closed");

            _this6.getClients();
          });
        }
      }, {
        key: "openClienView",
        value: function openClienView(clientId) {
          var _this7 = this;

          console.log("Message:" + clientId);
          var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
          dialogConfig.disableClose = false;
          dialogConfig.height = "60%";
          dialogConfig.width = "60%";
          dialogConfig.hasBackdrop = true;
          dialogConfig.panelClass = 'dialogBox';
          dialogConfig.autoFocus = true; //   dialogConfig.data = {
          //     id: 1,
          //     title: 'Kalender'
          // };

          var obj = this.clientsData.find(function (obj) {
            return obj._id == clientId;
          });
          dialogConfig.data = obj;
          this.dialog.open(_isiku_pop_up_isiku_pop_up_component__WEBPACK_IMPORTED_MODULE_3__["IsikuPopUpComponent"], dialogConfig).afterClosed().subscribe(function (result) {
            console.log("Dialog closed");

            _this7.getClients();
          });
        }
      }]);

      return IsikudComponent;
    }();

    IsikudComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _services_clients_service__WEBPACK_IMPORTED_MODULE_5__["ClientsService"]
      }];
    };

    IsikudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-isikud',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./isikud.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/isikud/isikud.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./isikud.component.scss */
      "./src/app/isikud/isikud.component.scss")).default]
    })], IsikudComponent);
    /***/
  },

  /***/
  "./src/app/kalender-pop-up/kalender-pop-up.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/kalender-pop-up/kalender-pop-up.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKalenderPopUpKalenderPopUpComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep.special-date {\n  background-color: var(--calendar-primary);\n  border-radius: 40px;\n}\n\n::ng-deep.host {\n  background-color: chartreuse;\n}\n\nmat-dialog {\n  background-color: var(--calendar-bg);\n}\n\nmat-calendar {\n  zoom: \"0.25\";\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nmat-form-field input {\n  background-color: var(--calendar-primary);\n}\n\n.mat-calendar {\n  display: block;\n  color: var(--calendar-text-primary);\n}\n\n.dialog_container {\n  position: relative;\n}\n\n.calendar-wrapper {\n  width: 350px;\n  text-align: center;\n}\n\n.mat-calender-header {\n  padding: 0;\n}\n\n::ng-deep .mat-calendar-controls {\n  margin: 5px !important;\n}\n\n::ng-deep .mat-focused .mat-form-field-underline {\n  display: none;\n}\n\n::ng-deep input {\n  caret-color: var(--calendar-text-primary);\n}\n\n.mat-focused .placeholder, .placeholder {\n  color: var(--calendar-text-primary);\n}\n\n.timepicker {\n  position: absolute;\n  right: 30px;\n  top: 30px;\n}\n\n/* width */\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px var(--calendar-text-secondary);\n  border-radius: 5px;\n}\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: var(--calendar-primary);\n  border-radius: 10px;\n}\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: var(--grid-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2FsZW5kZXItcG9wLXVwL0M6XFxQcm9ncmFtbWluZ1xcTMO1cHV0w7bDtlxcRnJvbnRfZW5kXFxsb3B1dG9vL3NyY1xcYXBwXFxrYWxlbmRlci1wb3AtdXBcXGthbGVuZGVyLXBvcC11cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2FsZW5kZXItcG9wLXVwL2thbGVuZGVyLXBvcC11cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLDRCQUFBO0FDRUY7O0FEQUE7RUFDRSxvQ0FBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtBQ0lGOztBREFBO0VBQ0UsV0FBQTtBQ0dGOztBREZFO0VBQ0UseUNBQUE7QUNJSjs7QUREQTtFQUNJLGNBQUE7RUFDQSxtQ0FBQTtBQ0lKOztBREZBO0VBQ0Usa0JBQUE7QUNLRjs7QURBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERBO0VBQ0MsVUFBQTtBQ0lEOztBRERBO0VBQ0Usc0JBQUE7QUNJRjs7QURBQTtFQUNFLGFBQUE7QUNHRjs7QUREQTtFQUNFLHlDQUFBO0FDSUY7O0FERkE7RUFDRSxtQ0FBQTtBQ0tGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0tGOztBREFBLFVBQUE7O0FBQ0E7RUFDRSxXQUFBO0FDR0Y7O0FEQUEsVUFBQTs7QUFDQTtFQUNFLHdEQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURBQSxXQUFBOztBQUNBO0VBQ0UsbUNBQUE7RUFDQSxtQkFBQTtBQ0dGOztBREFBLG9CQUFBOztBQUNBO0VBQ0UsK0JBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2thbGVuZGVyLXBvcC11cC9rYWxlbmRlci1wb3AtdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAuc3BlY2lhbC1kYXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYWxlbmRhci1wcmltYXJ5KTtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcbjo6bmctZGVlcC5ob3N0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNoYXJ0cmV1c2U7XHJcbn1cclxubWF0LWRpYWxvZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsZW5kYXItYmcpO1xyXG59XHJcbm1hdC1jYWxlbmRhciB7XHJcbiAgem9vbTogXCIwLjI1XCI7XHJcbn1cclxuXHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsZW5kYXItcHJpbWFyeSk7XHJcbiAgfVxyXG59XHJcbi5tYXQtY2FsZW5kYXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogdmFyKC0tY2FsZW5kYXItdGV4dC1wcmltYXJ5KTtcclxuICB9XHJcbi5kaWFsb2dfY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4gIFxyXG5cclxuIFxyXG4uY2FsZW5kYXItd3JhcHBlcntcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWF0LWNhbGVuZGVyLWhlYWRlcntcclxuIHBhZGRpbmc6IDA7IFxyXG5cclxufVxyXG46Om5nLWRlZXAgLm1hdC1jYWxlbmRhci1jb250cm9sc3tcclxuICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbjo6bmctZGVlcCBpbnB1dCB7XHJcbiAgY2FyZXQtY29sb3I6IHZhcigtLWNhbGVuZGFyLXRleHQtcHJpbWFyeSk7XHJcbn1cclxuLm1hdC1mb2N1c2VkIC5wbGFjZWhvbGRlciwgLnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdmFyKC0tY2FsZW5kYXItdGV4dC1wcmltYXJ5KVxyXG59XHJcblxyXG4udGltZXBpY2tlcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgdG9wOiAzMHB4XHJcbiAgXHJcbn1cclxuXHJcbi8vIFNDUk9MTEJBUiBkZXNnaW5lXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHZhcigtLWNhbGVuZGFyLXRleHQtc2Vjb25kYXJ5KTsgXHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FsZW5kYXItcHJpbWFyeSk7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmlkLXByaW1hcnkpOyBcclxufVxyXG4iLCI6Om5nLWRlZXAuc3BlY2lhbC1kYXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsZW5kYXItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59XG5cbjo6bmctZGVlcC5ob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTtcbn1cblxubWF0LWRpYWxvZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbGVuZGFyLWJnKTtcbn1cblxubWF0LWNhbGVuZGFyIHtcbiAgem9vbTogXCIwLjI1XCI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5tYXQtZm9ybS1maWVsZCBpbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbGVuZGFyLXByaW1hcnkpO1xufVxuXG4ubWF0LWNhbGVuZGFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1jYWxlbmRhci10ZXh0LXByaW1hcnkpO1xufVxuXG4uZGlhbG9nX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhbGVuZGFyLXdyYXBwZXIge1xuICB3aWR0aDogMzUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1jYWxlbmRlci1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1jYWxlbmRhci1jb250cm9scyB7XG4gIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjo6bmctZGVlcCBpbnB1dCB7XG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1jYWxlbmRhci10ZXh0LXByaW1hcnkpO1xufVxuXG4ubWF0LWZvY3VzZWQgLnBsYWNlaG9sZGVyLCAucGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tY2FsZW5kYXItdGV4dC1wcmltYXJ5KTtcbn1cblxuLnRpbWVwaWNrZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzMHB4O1xuICB0b3A6IDMwcHg7XG59XG5cbi8qIHdpZHRoICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCB2YXIoLS1jYWxlbmRhci10ZXh0LXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FsZW5kYXItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyaWQtcHJpbWFyeSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/kalender-pop-up/kalender-pop-up.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/kalender-pop-up/kalender-pop-up.component.ts ***!
    \**************************************************************/

  /*! exports provided: KalenderPopUpComponent */

  /***/
  function srcAppKalenderPopUpKalenderPopUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KalenderPopUpComponent", function () {
      return KalenderPopUpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var KalenderPopUpComponent =
    /*#__PURE__*/
    function () {
      function KalenderPopUpComponent(fb, dialogRef, data) {
        _classCallCheck(this, KalenderPopUpComponent);

        this.fb = fb;
        this.dialogRef = dialogRef;
        this.time = {
          hour: 13,
          minute: 30
        };
        this.datesToHighlight = ["2020-03-22T18:30:00.000Z", "2020-03-10T18:30:00.000Z", "2020-03-05T18:30:00.000Z", "2020-03-28T18:30:00.000Z", "2020-03-14T18:30:00.000Z", "2020-03-31T18:30:00.000Z", "2020-03-08T18:30:00.000Z", "2020-03-15T18:30:00.000Z"];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          task: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
          eventDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date())
        });
        this.dataArray = data; //console.log(this.dataArray);
      }

      _createClass(KalenderPopUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "save",
        value: function save() {
          console.log("saving");

          if (!this.theDate) {
            console.log("No date selected");
            this.theDate = new Date();
            console.log(this.theDate);
          } else if (!this.theHour) {
            console.log("No hour selected");
            this.theHour = this.time.hour;
          } else if (!this.theMinutes) {
            console.log("No time selected");
            this.theMinutes = this.time.minute;
          } else {
            console.log("All selected");
          }

          console.log("adding time...");
          this.theDate.setHours(this.theHour);
          this.theDate.setMinutes(this.theMinutes);
          this.form.get('eventDate').setValue(this.theDate);
          console.log(this.form.value);
          this.dialogRef.close(this.form.value);
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }, {
        key: "onSelect",
        value: function onSelect(event) {
          console.log(event);
        }
      }, {
        key: "dateClass",
        value: function dateClass() {
          var _this8 = this;

          return function (date) {
            var highlightDate = _this8.datesToHighlight.map(function (strDate) {
              return new Date(strDate);
            }).some(function (d) {
              return d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear();
            });

            return highlightDate ? 'special-date' : '';
          };
        }
      }, {
        key: "getSelectedDate",
        value: function getSelectedDate(event) {
          //event.setHour(12);
          this.theDate = event; //this.theDate.setHours(5);
          //this.form.get('eventDate').setValue(event);
        }
      }, {
        key: "logTime",
        value: function logTime(event) {
          this.theHour = event.hour;
          this.theMinutes = event.minute;
        }
      }]);

      return KalenderPopUpComponent;
    }();

    KalenderPopUpComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    KalenderPopUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-kalender-pop-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./kalender-pop-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/kalender-pop-up/kalender-pop-up.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./kalender-pop-up.component.scss */
      "./src/app/kalender-pop-up/kalender-pop-up.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], KalenderPopUpComponent);
    /***/
  },

  /***/
  "./src/app/lisa-isik-pop-up/lisa-isik-pop-up.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/lisa-isik-pop-up/lisa-isik-pop-up.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLisaIsikPopUpLisaIsikPopUpComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "form {\n  font-size: 10px;\n}\nform input {\n  font-size: 10px;\n}\nmat-form-field {\n  padding-left: 25px;\n}\n.mat-input-element {\n  padding-left: 5px;\n}\n.heading {\n  margin: 30px 30px 15px 30px;\n}\n.container {\n  padding: 0px 0px 0 50px;\n}\nbutton {\n  margin: 5px;\n  background-color: var(--calendar-primary);\n}\n.ng-valid[required], .ng-valid.required {\n  border-left: 2px solid var(--valid);\n  /* teal 400 */\n}\nmat-error {\n  color: var(--error-secondary);\n  font-size: 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzYS1pc2lrLXBvcC11cC9DOlxcUHJvZ3JhbW1pbmdcXEzDtXB1dMO2w7ZcXEZyb250X2VuZFxcbG9wdXRvby9zcmNcXGFwcFxcbGlzYS1pc2lrLXBvcC11cFxcbGlzYS1pc2lrLXBvcC11cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGlzYS1pc2lrLXBvcC11cC9saXNhLWlzaWstcG9wLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKO0FEQUk7RUFDSSxlQUFBO0FDRVI7QURDQTtFQUNJLGtCQUFBO0FDRUo7QURBQTtFQUNJLGlCQUFBO0FDR0o7QUREQTtFQUNJLDJCQUFBO0FDSUo7QURGQTtFQUNJLHVCQUFBO0FDS0o7QURIQTtFQUNJLFdBQUE7RUFDQSx5Q0FBQTtBQ01KO0FESkE7RUFDSSxtQ0FBQTtFQUFxQyxhQUFBO0FDUXpDO0FETkU7RUFDSSw2QkFBQTtFQUNBLGNBQUE7QUNTTiIsImZpbGUiOiJzcmMvYXBwL2xpc2EtaXNpay1wb3AtdXAvbGlzYS1pc2lrLXBvcC11cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBpbnB1dHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbn1cclxuLm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLmhlYWRpbmd7XHJcbiAgICBtYXJnaW46IDMwcHggMzBweCAxNXB4IDMwcHg7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMCA1MHB4O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsZW5kYXItcHJpbWFyeSk7XHJcbn1cclxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLXZhbGlkKTsgLyogdGVhbCA0MDAgKi9cclxuICB9XHJcbiAgbWF0LWVycm9ye1xyXG4gICAgICBjb2xvcjogdmFyKC0tZXJyb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgfVxyXG4gIFxyXG4vLyAgIC5uZy1pbnZhbGlkOm5vdChpbnB1dCkgIHtcclxuLy8gICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXHJcbi8vICAgfSIsImZvcm0ge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5mb3JtIGlucHV0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cblxuLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5oZWFkaW5nIHtcbiAgbWFyZ2luOiAzMHB4IDMwcHggMTVweCAzMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4IDBweCAwIDUwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYWxlbmRhci1wcmltYXJ5KTtcbn1cblxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS12YWxpZCk7XG4gIC8qIHRlYWwgNDAwICovXG59XG5cbm1hdC1lcnJvciB7XG4gIGNvbG9yOiB2YXIoLS1lcnJvci1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDlweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/lisa-isik-pop-up/lisa-isik-pop-up.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/lisa-isik-pop-up/lisa-isik-pop-up.component.ts ***!
    \****************************************************************/

  /*! exports provided: LisaIsikPopUpComponent */

  /***/
  function srcAppLisaIsikPopUpLisaIsikPopUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LisaIsikPopUpComponent", function () {
      return LisaIsikPopUpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _models_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_models/client */
    "./src/app/_models/client.ts");
    /* harmony import */


    var _services_clients_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_services/clients.service */
    "./src/app/_services/clients.service.ts");

    var LisaIsikPopUpComponent =
    /*#__PURE__*/
    function () {
      function LisaIsikPopUpComponent(dialogRef, fb, clientService, data) {
        _classCallCheck(this, LisaIsikPopUpComponent);

        this.dialogRef = dialogRef;
        this.fb = fb;
        this.clientService = clientService;

        if (data) {
          this.editData = data;
          this.editMode = true;
          console.log(this.editData._id);
        }

        this.editMode = false;
        this.isCompany = false;
      }

      _createClass(LisaIsikPopUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("___________");

          if (this.isCompany) {
            console.log("IsCompany: " + this.isCompany);
            this.form = this.fb.group({
              companyData: this.fb.group({
                companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                companyCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
                companyEmail: ['']
              }),
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
              idCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
              isCompany: [true],
              phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
              company: [''],
              address: ['']
            });
          } else if (this.editData) {
            this.form = this.fb.group({
              name: [this.editData.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              email: [this.editData.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
              idCode: [this.editData.idCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
              isCompany: [false],
              phone: [this.editData.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
              company: [this.editData.company],
              address: [this.editData.address]
            });
          } else {
            this.form = this.fb.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
              idCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
              isCompany: [true],
              phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
              company: [''],
              address: ['']
            });
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }, {
        key: "addCompanyForm",
        value: function addCompanyForm() {
          this.isCompany = !this.isCompany;
          this.ngOnInit();
        }
      }, {
        key: "saveFormData",
        value: function saveFormData() {
          if (this.form.dirty && this.form.valid) {
            var client = new _models_client__WEBPACK_IMPORTED_MODULE_4__["Client"](this.form.value.name, this.form.value.email, this.form.value.idCode, this.form.value.phone, this.form.value.isCompany, this.form.value.address, this.form.value.company);
            console.log("Client object sent: ");
            console.log(client);
            this.clientService.addClient(client).toPromise().then(function (data) {
              console.log("_____________");
              console.log(data);
            }, function (err) {
              throw err;
            });
          }

          this.dialogRef.close();
        }
      }, {
        key: "editFormData",
        value: function editFormData(clientId) {
          if (this.form.valid) {
            var client = new _models_client__WEBPACK_IMPORTED_MODULE_4__["Client"](this.form.value.name, this.form.value.email, this.form.value.idCode, this.form.value.phone, this.form.value.isCompany, this.form.value.address, this.form.value.company);
            console.log("Client object chanaged: ");
            console.log(client);
            this.clientService.changeClient(clientId, client).toPromise().then(function (data) {
              console.log("_____________");
              console.log(data);
            }, function (err) {
              throw err;
            });
          }

          this.dialogRef.close();
        }
      }, {
        key: "idCode",
        get: function get() {
          return this.form.get('idCode');
        }
      }, {
        key: "email",
        get: function get() {
          return this.form.get('email');
        }
      }, {
        key: "phone",
        get: function get() {
          return this.form.get('phone');
        }
      }, {
        key: "companyCode",
        get: function get() {
          return this.form.get('companyData.companyCode');
        }
      }]);

      return LisaIsikPopUpComponent;
    }();

    LisaIsikPopUpComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_clients_service__WEBPACK_IMPORTED_MODULE_5__["ClientsService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    LisaIsikPopUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lisa-isik-pop-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lisa-isik-pop-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/lisa-isik-pop-up/lisa-isik-pop-up.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lisa-isik-pop-up.component.scss */
      "./src/app/lisa-isik-pop-up/lisa-isik-pop-up.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], LisaIsikPopUpComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  margin: 50px;\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFByb2dyYW1taW5nXFxMw7VwdXTDtsO2XFxGcm9udF9lbmRcXGxvcHV0b28vc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxufSIsIi5jb250YWluZXIge1xuICBtYXJnaW46IDUwcHg7XG4gIHdpZHRoOiAzMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/authentication.service */
    "./src/app/_services/authentication.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(auth, router) {
        _classCallCheck(this, LoginComponent);

        this.auth = auth;
        this.router = router;
        this.credentials = {
          email: '',
          password: ''
        };
      }

      _createClass(LoginComponent, [{
        key: "login",
        value: function login() {
          var _this9 = this;

          console.log("Login started....");
          this.auth.login(this.credentials).subscribe(function () {
            _this9.router.navigateByUrl('/');
          }, function (err) {
            console.error(err);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/navbar/navbar.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@font-face {\n  font-family: \"Saira\";\n  src: url(\"/assets/font/Saira-Regular.ttf\");\n}\n* {\n  font-family: \"Saira\";\n  font-style: normal;\n  font-weight: normal;\n}\nmat-icon {\n  font-family: \"Material Icons\" !important;\n}\n.mainBar {\n  padding: 10px;\n}\n.logo img {\n  width: 85%;\n}\n.logo :hover {\n  -webkit-filter: drop-shadow(var(--background-hover-shadow));\n          filter: drop-shadow(var(--background-hover-shadow));\n  cursor: pointer;\n}\n.logo :focus {\n  outline: 0 !important;\n}\n.navbar {\n  margin: 30px;\n  align-self: center;\n  height: 68px;\n  border: 1px solid #1853AB;\n  border-radius: 20px;\n  background-color: var(--background-secondary);\n}\n.isikud,\n.dokumendid,\n.toimikud,\n.ajaarvestus,\n.user-panel {\n  width: 100%;\n  height: 30px;\n  box-shadow: inset 6px 0px 3px -5px #FEFEFE;\n  -webkit-transform: skewX(-35deg);\n          transform: skewX(-35deg);\n  padding-left: 3%;\n  border-left: 1px solid var(--text-grey);\n}\n.isikud a,\n.dokumendid a,\n.toimikud a,\n.ajaarvestus a,\n.user-panel a {\n  color: var(--text-primary);\n  text-decoration: none;\n  width: 100%;\n}\n.isikud a h4,\n.dokumendid a h4,\n.toimikud a h4,\n.ajaarvestus a h4,\n.user-panel a h4 {\n  margin: 0px;\n  -webkit-transform: skewX(35deg);\n          transform: skewX(35deg);\n}\n@media (max-width: 850px) {\n  .isikud a h4,\n.dokumendid a h4,\n.toimikud a h4,\n.ajaarvestus a h4,\n.user-panel a h4 {\n    font-size: 16px;\n  }\n}\n.isikud :hover,\n.dokumendid :hover,\n.toimikud :hover,\n.ajaarvestus :hover,\n.user-panel :hover {\n  cursor: pointer;\n  color: var(--text-primary);\n  text-shadow: var(--background-hover-shadow);\n}\n.user-panel {\n  display: inline-block;\n}\n.user-panel mat-icon {\n  margin-right: 20px;\n  -webkit-transform: skewX(35deg);\n          transform: skewX(35deg);\n  font-size: 30px;\n}\n.user-panel mat-slide-toggle {\n  -webkit-transform: skewX(35deg);\n          transform: skewX(35deg);\n}\n.user-panel mat-slide-toggle mat-icon {\n  -webkit-transform: skewX(0);\n          transform: skewX(0);\n}\n.user-panel mat-button {\n  width: 120px;\n}\n.toggle {\n  margin-top: 5px;\n}\n.actionbar {\n  margin-right: 20px;\n}\n.active {\n  border-bottom: 4px solid #1de9b696;\n}\n.active :hover {\n  text-shadow: none;\n}\n::ng-deep .mat-slide-toggle-thumb-container, .mat-slide-toggle-thumb-container, .mat-slide-toggle-thumb, .mat-slide-toggle-ripple mat-ripple, mat-slide-toggle {\n  cursor: pointer;\n}\n::ng-deep .mat-slide-toggle-thumb-container :hover, .mat-slide-toggle-thumb-container :hover, .mat-slide-toggle-thumb :hover, .mat-slide-toggle-ripple mat-ripple :hover, mat-slide-toggle :hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxQcm9ncmFtbWluZ1xcTMO1cHV0w7bDtlxcRnJvbnRfZW5kXFxsb3B1dG9vL3NyY1xcc3R5bGVzXFxiYXNlXFxfdHlwb2dyYXBoeS5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvQzpcXFByb2dyYW1taW5nXFxMw7VwdXTDtsO2XFxGcm9udF9lbmRcXGxvcHV0b28vc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0ksb0JBQUE7RUFDQSwwQ0FBQTtBQ1RKO0FEWUE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNWSjtBRGNHO0VBQ0Msd0NBQUE7QUNYSjtBQ1ZBO0VBQ0UsYUFBQTtBRGFGO0FDVEU7RUFDRSxVQUFBO0FEWUo7QUNWRTtFQUVFLDJEQUFBO1VBQUEsbURBQUE7RUFDQSxlQUFBO0FEV0o7QUNURTtFQUNFLHFCQUFBO0FEV0o7QUNMQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBRUEsNkNBQUE7QURPRjtBQ0xBOzs7OztFQUtFLFdBQUE7RUFFQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtBRE9GO0FDQUU7Ozs7O0VBQ0UsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QURNSjtBQ0xJOzs7OztFQUNFLFdBQUE7RUFJQSwrQkFBQTtVQUFBLHVCQUFBO0FEUU47QUNQTTtFQU5GOzs7OztJQU9JLGVBQUE7RURjTjtBQUNGO0FDVkU7Ozs7O0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBRUEsMkNBQUE7QURlSjtBQ1pBO0VBQ0UscUJBQUE7QURlRjtBQ1pFO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtBRGNKO0FDWkU7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FEY0o7QUNiSTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7QURlTjtBQ1pFO0VBQ0UsWUFBQTtBRGNKO0FDVkE7RUFDRSxlQUFBO0FEYUY7QUNYQTtFQUNFLGtCQUFBO0FEY0Y7QUNYQTtFQUNFLGtDQUFBO0FEY0Y7QUNiRTtFQUNFLGlCQUFBO0FEZUo7QUNWQTtFQUlFLGVBQUE7QURVRjtBQ2JFO0VBQ0UsZUFBQTtBRGVKIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWJsdWU6ICMxODUzQUI7IC8vbWFpbiB0ZXh0IGFuZCBpY29uIGNvbG9yXHJcbiRzZWNvbmRhcnktYmx1ZTogIzAwMzhGRjtcclxuXHJcbiRwcmltYXJ5LWdyZXk6ICM3Njc2NzY7XHJcbiRzZWNvbmRhcnktZ3JleTogI0I0QjZCQiA7IC8vbGluZXMsIGdyaWRzIGFuZCBzdWNoXHJcblxyXG4kcHJpbWFyeS1iZzogI0ZFRkVGRTsgLy9iYWNrZ3JvdW5kLCBhbmQgdGV4dHMgaW4gZGFyayBiZ1xyXG5cclxuXHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2FpcmEnO1xyXG4gICAgc3JjOiB1cmwoJy9hc3NldHMvZm9udC9TYWlyYS1SZWd1bGFyLnR0ZicpO1xyXG4gIH1cclxuXHJcbioge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTYWlyYSc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgLy9mb250LXNpemU6IDE2cHg7XHJcbiAgICAvL2xpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICB9XHJcbiAgIG1hdC1pY29ue1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucycgIWltcG9ydGFudDsgLy9pbXBvcnRhbnQgZm9yIGljb25zIHRvIHdvcmtcclxufVxyXG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU2FpcmFcIjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnQvU2FpcmEtUmVndWxhci50dGZcIik7XG59XG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiU2FpcmFcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5tYXQtaWNvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCIgIWltcG9ydGFudDtcbn1cblxuLm1haW5CYXIge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubG9nbyBpbWcge1xuICB3aWR0aDogODUlO1xufVxuLmxvZ28gOmhvdmVyIHtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdyh2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyLXNoYWRvdykpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubG9nbyA6Zm9jdXMge1xuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXIge1xuICBtYXJnaW46IDMwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2OHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTg1M0FCO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XG59XG5cbi5pc2lrdWQsXG4uZG9rdW1lbmRpZCxcbi50b2ltaWt1ZCxcbi5hamFhcnZlc3R1cyxcbi51c2VyLXBhbmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgNnB4IDBweCAzcHggLTVweCAjRkVGRUZFO1xuICB0cmFuc2Zvcm06IHNrZXdYKC0zNWRlZyk7XG4gIHBhZGRpbmctbGVmdDogMyU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tdGV4dC1ncmV5KTtcbn1cbi5pc2lrdWQgYSxcbi5kb2t1bWVuZGlkIGEsXG4udG9pbWlrdWQgYSxcbi5hamFhcnZlc3R1cyBhLFxuLnVzZXItcGFuZWwgYSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmlzaWt1ZCBhIGg0LFxuLmRva3VtZW5kaWQgYSBoNCxcbi50b2ltaWt1ZCBhIGg0LFxuLmFqYWFydmVzdHVzIGEgaDQsXG4udXNlci1wYW5lbCBhIGg0IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHRyYW5zZm9ybTogc2tld1goMzVkZWcpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIC5pc2lrdWQgYSBoNCxcbi5kb2t1bWVuZGlkIGEgaDQsXG4udG9pbWlrdWQgYSBoNCxcbi5hamFhcnZlc3R1cyBhIGg0LFxuLnVzZXItcGFuZWwgYSBoNCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4uaXNpa3VkIDpob3Zlcixcbi5kb2t1bWVuZGlkIDpob3Zlcixcbi50b2ltaWt1ZCA6aG92ZXIsXG4uYWphYXJ2ZXN0dXMgOmhvdmVyLFxuLnVzZXItcGFuZWwgOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgdGV4dC1zaGFkb3c6IHZhcigtLWJhY2tncm91bmQtaG92ZXItc2hhZG93KTtcbn1cblxuLnVzZXItcGFuZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4udXNlci1wYW5lbCBtYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgdHJhbnNmb3JtOiBza2V3WCgzNWRlZyk7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi51c2VyLXBhbmVsIG1hdC1zbGlkZS10b2dnbGUge1xuICB0cmFuc2Zvcm06IHNrZXdYKDM1ZGVnKTtcbn1cbi51c2VyLXBhbmVsIG1hdC1zbGlkZS10b2dnbGUgbWF0LWljb24ge1xuICB0cmFuc2Zvcm06IHNrZXdYKDApO1xufVxuLnVzZXItcGFuZWwgbWF0LWJ1dHRvbiB7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLnRvZ2dsZSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmFjdGlvbmJhciB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMWRlOWI2OTY7XG59XG4uYWN0aXZlIDpob3ZlciB7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWItY29udGFpbmVyLCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYi1jb250YWluZXIsIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iLCAubWF0LXNsaWRlLXRvZ2dsZS1yaXBwbGUgbWF0LXJpcHBsZSwgbWF0LXNsaWRlLXRvZ2dsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYi1jb250YWluZXIgOmhvdmVyLCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYi1jb250YWluZXIgOmhvdmVyLCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiA6aG92ZXIsIC5tYXQtc2xpZGUtdG9nZ2xlLXJpcHBsZSBtYXQtcmlwcGxlIDpob3ZlciwgbWF0LXNsaWRlLXRvZ2dsZSA6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiQGltcG9ydCBcImJhc2UvdHlwb2dyYXBoeVwiO1xyXG5cclxuLm1haW5CYXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmxvZ28ge1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICB9XHJcbiAgOmhvdmVyIHtcclxuICAgIC8vLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDBweCA0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zNSkpO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyh2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyLXNoYWRvdykpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICA6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4ubG9nby1hY3RpdmUge1xyXG4gXHJcbn1cclxuLm5hdmJhciB7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDY4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktYmx1ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG59XHJcbi5pc2lrdWQsXHJcbi5kb2t1bWVuZGlkLFxyXG4udG9pbWlrdWQsXHJcbi5hamFhcnZlc3R1cyxcclxuLnVzZXItcGFuZWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3gtc2hhZG93OiBpbnNldCA2cHggMHB4IDNweCAtNXB4ICRwcmltYXJ5LWJnO1xyXG4gIHRyYW5zZm9ybTogc2tld1goLTM1ZGVnKTtcclxuICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tdGV4dC1ncmV5KTtcclxuXHJcbiAgLy9tYXJnaW4tdG9wOiAxNXB4O1xyXG4gIC8vbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAvL2JhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICAvL292ZXJmbG93OmhpZGRlbjtcclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaDQge1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuXHJcbiAgICAgIC8vY29sb3I6ICRwcmltYXJ5LWJsdWU7XHJcbiAgICAgIC8vbWFyZ2luLWxlZnQ6IDM1JTtcclxuICAgICAgdHJhbnNmb3JtOiBza2V3WCgzNWRlZyk7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICA6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1zaGFkb3c6IHZhcigtLWJhY2tncm91bmQtaG92ZXItc2hhZG93KTtcclxuICB9XHJcbn1cclxuLnVzZXItcGFuZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAvLyBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hdC1pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIHRyYW5zZm9ybTogc2tld1goMzVkZWcpO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICBtYXQtc2xpZGUtdG9nZ2xleyAgICBcclxuICAgIHRyYW5zZm9ybTogc2tld1goMzVkZWcpO1xyXG4gICAgbWF0LWljb257XHJcbiAgICAgIHRyYW5zZm9ybTogc2tld1goMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG1hdC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEyMHB4OyBcclxuXHJcbiAgfVxyXG59XHJcbi50b2dnbGV7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5hY3Rpb25iYXIge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG4uYWN0aXZlIHtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzFkZTliNjk2O1xyXG4gIDpob3ZlciB7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWItY29udGFpbmVyLCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYi1jb250YWluZXIsIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iLCAubWF0LXNsaWRlLXRvZ2dsZS1yaXBwbGUgbWF0LXJpcHBsZSwgbWF0LXNsaWRlLXRvZ2dsZXtcclxuICA6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_theme_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/theme/theme.service */
    "./src/app/theme/theme.service.ts");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(auth, router, themeService) {
        _classCallCheck(this, NavbarComponent);

        this.auth = auth;
        this.router = router;
        this.themeService = themeService;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.iconTheme = "light";
          this.user = this.auth.getUserDetails();
        }
      }, {
        key: "logout",
        value: function logout() {
          console.log("Logging you out");
          this.auth.logout();
        }
      }, {
        key: "toggleTheme",
        value: function toggleTheme() {
          if (this.themeService.isDarkTheme()) {
            this.themeService.setLightTheme();
            this.iconTheme = "light";
          } else {
            this.themeService.setDarkTheme();
            this.iconTheme = "dark";
          }
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_theme_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/navbar/navbar.component.scss")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(auth, router) {
        _classCallCheck(this, RegisterComponent);

        this.auth = auth;
        this.router = router;
        this.credentials = {
          email: '',
          name: '',
          password: ''
        };
      }

      _createClass(RegisterComponent, [{
        key: "register",
        value: function register() {
          var _this10 = this;

          console.log("Reged!");
          this.auth.register(this.credentials).subscribe(function () {
            _this10.router.navigateByUrl('/');
          }, function (err) {
            console.error(err);
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/search/search.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/search/search.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  left: 0;\n  font-size: 12px;\n}\n\n.otsing {\n  color: var(--text-primary);\n  height: 20px;\n}\n\n.otsing mat-form-field input {\n  font-size: 20px;\n}\n\n.lable {\n  color: red;\n  font-size: 12px;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px;\n}\n\n.mat-form-field-empty.mat-form-field-label {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0M6XFxQcm9ncmFtbWluZ1xcTMO1cHV0w7bDtlxcRnJvbnRfZW5kXFxsb3B1dG9vL3NyY1xcYXBwXFxzZWFyY2hcXHNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ1E7RUFDSSxlQUFBO0FDQ1o7O0FESUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRElBO0VBQXlELGtCQUFBO0FDQXpEOztBRENBO0VBQ0ksWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ub3RzaW5ne1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXQtZm9ybS1maWVsZHtcclxuICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIH1cclxuXHJcbi5sYWJsZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXggeyBwYWRkaW5nOiAwLjNlbSAwcHg7fVxyXG4ubWF0LWZvcm0tZmllbGQtZW1wdHkubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5vdHNpbmcge1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLm90c2luZyBtYXQtZm9ybS1maWVsZCBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmxhYmxlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAwLjNlbSAwcHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1lbXB0eS5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiBncmVlbjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/search/search.component.ts":
  /*!********************************************!*\
    !*** ./src/app/search/search.component.ts ***!
    \********************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent() {
        _classCallCheck(this, SearchComponent);
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchComponent;
    }();

    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.component.scss */
      "./src/app/search/search.component.scss")).default]
    })], SearchComponent);
    /***/
  },

  /***/
  "./src/app/theme/theme.service.ts":
  /*!****************************************!*\
    !*** ./src/app/theme/theme.service.ts ***!
    \****************************************/

  /*! exports provided: ThemeService */

  /***/
  function srcAppThemeThemeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
      return ThemeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./theme */
    "./src/app/theme/theme.ts");

    var ThemeService =
    /*#__PURE__*/
    function () {
      function ThemeService() {
        _classCallCheck(this, ThemeService);

        this.active = _theme__WEBPACK_IMPORTED_MODULE_2__["light"];
        this.availableThemes = [_theme__WEBPACK_IMPORTED_MODULE_2__["light"], _theme__WEBPACK_IMPORTED_MODULE_2__["dark"]];
      }

      _createClass(ThemeService, [{
        key: "getAvailableThemes",
        value: function getAvailableThemes() {
          return this.availableThemes;
        }
      }, {
        key: "getActiveTheme",
        value: function getActiveTheme() {
          return this.active;
        }
      }, {
        key: "isDarkTheme",
        value: function isDarkTheme() {
          return this.active.name === _theme__WEBPACK_IMPORTED_MODULE_2__["dark"].name;
        }
      }, {
        key: "setDarkTheme",
        value: function setDarkTheme() {
          this.setActiveTheme(_theme__WEBPACK_IMPORTED_MODULE_2__["dark"]);
        }
      }, {
        key: "setLightTheme",
        value: function setLightTheme() {
          this.setActiveTheme(_theme__WEBPACK_IMPORTED_MODULE_2__["light"]);
        }
      }, {
        key: "setActiveTheme",
        value: function setActiveTheme(theme) {
          var _this11 = this;

          this.active = theme;
          Object.keys(this.active.properties).forEach(function (property) {
            document.documentElement.style.setProperty(property, _this11.active.properties[property]);
          });
        }
      }]);

      return ThemeService;
    }();

    ThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ThemeService);
    /***/
  },

  /***/
  "./src/app/theme/theme.ts":
  /*!********************************!*\
    !*** ./src/app/theme/theme.ts ***!
    \********************************/

  /*! exports provided: light, dark */

  /***/
  function srcAppThemeThemeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "light", function () {
      return light;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dark", function () {
      return dark;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var light = {
      name: "light",
      properties: {
        "--text-primary": "#1853AB",
        "--text-secondary": "#000000",
        "--text-grey": "#E7E9F1",
        "--background-primary": "#d3d3d3",
        "--background-secondary": "#FEFEFE",
        "--grid-primary": "#B4B6BB",
        // Calendar
        "--calendar-bg": "#818A98",
        "--calendar-text-primary": "#FFFFFF",
        "--calendar-text-secondary": "#C2C8D2",
        "--calendar-primary": "#4D6EA1",
        "--error-secondary": "#ffcecc",
        //Shadows
        "--background-hover-shadow": "2px 4px 4px rgba(0, 0, 0, 0.40)"
      }
    };
    var dark = {
      name: "dark",
      properties: {
        "--text-primary": "#F1F1F1",
        "--text-secondary": "#979090",
        "--text-grey": "#979090",
        "--background-primary": "#6C6A6C",
        "--background-secondary": "#293D5A",
        "--grid-primary": "#B4B6BB",
        //Calendar
        "--calendar-bg": "#818A98",
        "--calendar-text-primary": "#FFFFFF",
        "--calendar-text-secondary": "#C2C8D2",
        "--calendar-primary": "#4D6EA1",
        "--error-secondary": "#ffcecc",
        // Shadows
        "--background-hover-shadow": "2px 4px 4px rgba(255, 255, 255, 0.40)"
      }
    };
    /***/
  },

  /***/
  "./src/app/toimikud/toimikud.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/toimikud/toimikud.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppToimikudToimikudComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvaW1pa3VkL3RvaW1pa3VkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/toimikud/toimikud.component.ts":
  /*!************************************************!*\
    !*** ./src/app/toimikud/toimikud.component.ts ***!
    \************************************************/

  /*! exports provided: ToimikudComponent */

  /***/
  function srcAppToimikudToimikudComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToimikudComponent", function () {
      return ToimikudComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToimikudComponent =
    /*#__PURE__*/
    function () {
      function ToimikudComponent() {
        _classCallCheck(this, ToimikudComponent);

        this.dateObj = Date.now();
        this.date = new Date(2018, 5, 5, 17, 23, 42, 11);
        this.date1 = new Date(0, 0, 0, 0, 0, 10, 0);
      }

      _createClass(ToimikudComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.date.setHours(5);
        }
      }]);

      return ToimikudComponent;
    }();

    ToimikudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-toimikud',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toimikud.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/toimikud/toimikud.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toimikud.component.scss */
      "./src/app/toimikud/toimikud.component.scss")).default]
    })], ToimikudComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://178.33.37.64:3000'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Programming\Lõputöö\Front_end\loputoo\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map