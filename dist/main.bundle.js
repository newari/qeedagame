webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/app.auth": [
		"./src/app/auth/app.auth.ts",
		"app.auth"
	],
	"./game/game.module": [
		"./src/app/game/game.module.ts",
		"game.module",
		"common"
	],
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"home.module"
	],
	"./result/result.module": [
		"./src/app/result/result.module.ts",
		"result.module",
		"common"
	],
	"./sample/sample.module": [
		"./src/app/sample/sample.module.ts",
		"sample.module"
	],
	"./table/table.module": [
		"./src/app/table/table.module.ts",
		"table.module"
	],
	"./withdrawal/withdrawal.module": [
		"./src/app/withdrawal/withdrawal.module.ts",
		"withdrawal.module"
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
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".main-content-wrapper{\n    width:100%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-loader\" [ngClass]=\"pageLoader\" style=\"position: fixed;\n    width: 100%;\n    height: 100%;\n    z-index: 9999;\n    background: rgba(255, 255, 255, 0.47);\">\n\n  <div class=\"spinner clockwise\">\n    <div class=\"spinner-icon\" style=\"border-top-color: #2196F3; border-left-color: #2196F3;\"></div>\n  </div>\n</div>\n<!-- demo -->\n\n<ek-notifier></ek-notifier>\n\n<app-header></app-header>\n\n<div class=\"wrapper\">\n  <div class=\"sidebar-wrapper\">\n    <app-sidebar></app-sidebar>\n  </div>\n  <div class=\"main-content-wrapper\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_notifier_notifier_service__ = __webpack_require__("./src/app/shared/notifier/notifier.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(notifier, router) {
        this.notifier = notifier;
        this.router = router;
        this.pageLoader = 'show';
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event.constructor.name === 'NavigationStart') {
                _this.pageLoader = "show";
                _this.notifier.start();
                _this.notifier.navSpinner = true;
            }
            else if (event.constructor.name === 'RouteConfigLoadStart') {
                _this.notifier.progress += 20;
                // _this.notifier.completeProgressBar();
                // _this.notifier.navSpinner=false;
            }
            else if (event.constructor.name === 'RouteConfigLoadEnd') {
                _this.notifier.progress += 20;
                // _this.notifier.navSpinner=false;
            }
            else if (event.constructor.name === 'RoutesRecognized') {
                _this.notifier.progress += 20;
                // _this.notifier.completeProgressBar();
                // _this.notifier.navSpinner=false;
            }
            else if (event.constructor.name === 'NavigationEnd') {
                _this.pageLoader = "hide";
                _this.notifier.completeProgressBar();
                _this.notifier.navSpinner = false;
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.notifier.clearAlert();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_notifier_notifier_service__["a" /* NotifierService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__local_config__ = __webpack_require__("./src/local.config.ts");

var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    AppConfig.BASICS = new __WEBPACK_IMPORTED_MODULE_0__local_config__["a" /* LocalConfig */]().getBasics();
    return AppConfig;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_notifier_notifier_module__ = __webpack_require__("./src/app/shared/notifier/notifier.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_auth_guard_service__ = __webpack_require__("./src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_header_header_module__ = __webpack_require__("./src/app/shared/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_sidebar_sidebar_module__ = __webpack_require__("./src/app/shared/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_footer_footer_module__ = __webpack_require__("./src/app/shared/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_services_auth_interceptor__ = __webpack_require__("./src/app/shared/services/auth.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_notifier_notifier_service__ = __webpack_require__("./src/app/shared/notifier/notifier.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_15__angular_material_menu__["a" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* JsonpModule */], __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["c" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_8__shared_header_header_module__["a" /* HeaderModule */], __WEBPACK_IMPORTED_MODULE_9__shared_sidebar_sidebar_module__["a" /* SidebarModule */], __WEBPACK_IMPORTED_MODULE_10__shared_footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* APP_ROUTES */]),
                __WEBPACK_IMPORTED_MODULE_6__shared_notifier_notifier_module__["a" /* NotifierModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClient */], {
                    provide: __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_14__shared_services_auth_interceptor__["a" /* AuthInterceptor */],
                    multi: true
                }, __WEBPACK_IMPORTED_MODULE_7__shared_services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_11__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__shared_notifier_notifier_service__["a" /* NotifierService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_guard_service__ = __webpack_require__("./src/app/shared/services/auth-guard.service.ts");

var APP_ROUTES = [
    {
        path: '',
        children: [
            { path: '', loadChildren: './sample/sample.module#SampleModule' },
            { path: 'sample', loadChildren: './sample/sample.module#SampleModule' },
        ]
    },
    {
        path: 'admin',
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__shared_services_auth_guard_service__["a" /* AuthGuard */]],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_0__shared_services_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            { path: '', loadChildren: './home/home.module#HomeModule' },
            { path: 'sample', loadChildren: './sample/sample.module#SampleModule' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'table', loadChildren: './table/table.module#TableModule' },
            { path: 'game', loadChildren: './game/game.module#GameModule' },
            { path: 'game/:gameId/result', loadChildren: './result/result.module#ResultModule' },
            { path: 'withdrawal', loadChildren: './withdrawal/withdrawal.module#WithdrawalModule' },
        ]
    },
    {
        path: 'admin',
        children: [
            { path: 'auth', loadChildren: './auth/app.auth#AppAuthModule' },
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/footer/footer.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <ul>\n        <li class=\"brand\">NewariTech</li>\n        <li><a>Terms & Conditions</a></li>\n        <li><a>Privacy Policy</a></li>\n        <li><a>Support</a></li>\n    </ul>\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer__ = __webpack_require__("./src/app/shared/footer/footer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__footer__["a" /* AppFooter */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__footer__["a" /* AppFooter */]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppFooter = /** @class */ (function () {
    function AppFooter() {
    }
    AppFooter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/shared/footer/footer.html")
        })
    ], AppFooter);
    return AppFooter;
}());



/***/ }),

/***/ "./src/app/shared/header/header.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"header\">\n        <div class=\"ek-logo-sec\">\n            <a class=\"link\" (click)=\"goToHome()\">\n                <!-- <img src=\"/assets/images/edukit-logo-44.png\" height=\"32px\" alt=\"Edukit\"> -->\n                NewariTech\n            </a>\n        </div>\n        <div class=\"app-sec\"></div>\n        <div class=\"right-sec\">\n            <ul>\n                <li class=\"ssn-cntr-dt\"><span>Hello Admin</span></li>\n                <li class=\"user-opts\">\n                    <button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n                    <mat-menu #menu=\"matMenu\">\n                        <button mat-menu-item (click)=\"logout()\">Logout</button>\n                    </mat-menu>\n                </li>\n            </ul>\n        </div>\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/shared/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header__ = __webpack_require__("./src/app/shared/header/header.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__header__["a" /* AppHeader */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4__angular_material_button__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_menu__["a" /* MatMenuModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__header__["a" /* AppHeader */]]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/shared/header/header.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppHeader = /** @class */ (function () {
    function AppHeader(authService) {
        this.authService = authService;
    }
    AppHeader.prototype.ngOnInit = function () {
    };
    AppHeader.prototype.goToHome = function () {
    };
    AppHeader.prototype.logout = function () {
        this.authService.logout();
    };
    AppHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/shared/header/header.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], AppHeader);
    return AppHeader;
}());



/***/ }),

/***/ "./src/app/shared/notifier/notifier.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifierComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notifier_service__ = __webpack_require__("./src/app/shared/notifier/notifier.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotifierComponent = /** @class */ (function () {
    function NotifierComponent(notifier) {
        this.notifier = notifier;
        this.progress = 0;
        this.spinner = false;
        this.navSpinner = false;
        this.progressbarStatus = 'vhide';
        this.msg = {
            status: 'hide',
            heading: 'Processing...',
            content: '',
            type: ''
        };
    }
    NotifierComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notifier.data().subscribe(function (config) {
            _this.progress = config.progressBar.progress;
            _this.progressbarStatus = config.progressBar.status;
            _this.msg = config.msg;
            _this.spinner = config.spinner;
            _this.navSpinner = config.navSpinner;
        }, function (err) { return console.log(err); });
    };
    NotifierComponent.prototype.hideAlert = function () {
        this.msg.status = "hide";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], NotifierComponent.prototype, "progress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NotifierComponent.prototype, "spinner", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NotifierComponent.prototype, "navSpinner", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NotifierComponent.prototype, "progressbarStatus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NotifierComponent.prototype, "msg", void 0);
    NotifierComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ek-notifier',
            template: "<div class=\"ek-notifier ek-progressbar\" [style.width]=\"progress + '%'\" [ngClass]=\"progressbarStatus\"></div>\n    <div class=\"ek-alert\" [ngClass]=\"msg.status\">\n        <div class=\"msg-box {{msg.type}}\">\n            <div class=\"heading\">{{msg.heading}}</div>\n            <div class=\"content\" *ngIf=\"msg.content!=''\">{{msg.content}}</div>\n            <div class=\"close-opt\" (click)=\"hideAlert()\"><span class=\"glyphicon glyphicon-remove-circle\"></span></div>\n        </div>\n    </div>\n    <div class=\"ek-spinner\" *ngIf=\"spinner\">\n        <div class=\"spinner clockwise\">\n            <div class=\"spinner-icon\" style=\"border-top-color: rgb(204, 24, 30); border-left-color: rgb(204, 24, 30);\"></div>\n        </div>\n    </div>\n    <div class=\"ek-nav-spinner\" *ngIf=\"navSpinner\">\n        <div class=\"spinner clockwise\">\n            <div class=\"spinner-icon\" style=\"border-top-color: #2196F3; border-left-color: #2196F3;\"></div>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__notifier_service__["a" /* NotifierService */]])
    ], NotifierComponent);
    return NotifierComponent;
}());



/***/ }),

/***/ "./src/app/shared/notifier/notifier.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifierModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifier_component__ = __webpack_require__("./src/app/shared/notifier/notifier.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifier_service__ = __webpack_require__("./src/app/shared/notifier/notifier.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotifierModule = /** @class */ (function () {
    function NotifierModule() {
    }
    NotifierModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notifier_component__["a" /* NotifierComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__notifier_component__["a" /* NotifierComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__notifier_service__["a" /* NotifierService */]]
        })
    ], NotifierModule);
    return NotifierModule;
}());



/***/ }),

/***/ "./src/app/shared/notifier/notifier.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifierService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotifierService = /** @class */ (function () {
    function NotifierService() {
        this._intervalCounterId = 0;
        this._progress = 0;
        // data:Observable<any>;
        this.dataObserver = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.config = {
            progressBar: {
                status: 'vshow',
                progress: 0,
                interval: 50
            },
            spinner: false,
            navSpinner: false,
            msg: {
                heading: 'Processing',
                content: '',
                type: 'info',
                status: 'hide',
                duration: 5000
            },
            overlay: {
                status: 'hide'
            }
        };
        // this.data1 = new Observable(observer => this.dataObserver = observer);
    }
    NotifierService.prototype.data = function () {
        return this.dataObserver.asObservable();
    };
    NotifierService.prototype.setProgress = function (progress) {
        // this.dataObserver.next(progress);
    };
    Object.defineProperty(NotifierService.prototype, "progress", {
        get: function () {
            return this._progress;
        },
        set: function (value) {
            if (value > 0) {
                this.config.progressBar.status = 'vshow';
            }
            this._progress = value;
            this.config.progressBar.progress = this._progress;
            this.dataObserver.next(this.config);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotifierService.prototype, "spinner", {
        get: function () {
            return this.config.spinner;
        },
        set: function (value) {
            this.config.spinner = value;
            this.dataObserver.next(this.config);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotifierService.prototype, "navSpinner", {
        get: function () {
            return this.config.navSpinner;
        },
        set: function (value) {
            this.config.navSpinner = value;
            this.dataObserver.next(this.config);
        },
        enumerable: true,
        configurable: true
    });
    NotifierService.prototype.start = function (config) {
        if (config === void 0) { config = null; }
        if (config !== null) {
            this.config = config;
        }
        this.startProgressBar();
    };
    NotifierService.prototype.startProgressBar = function () {
        var _this = this;
        if (this.progress > 0) {
            this.completeProgressBar();
        }
        this.progress = 5;
        this._intervalCounterId = window.setInterval(function () {
            // Increment the progress and update view component
            _this.progress++;
            // If the progress is 100% - call complete
            if (_this.progress === 100) {
                _this.completeProgressBar();
            }
        }, this.config.progressBar.interval);
    };
    NotifierService.prototype.stopProgressBar = function () {
        if (this._intervalCounterId) {
            clearInterval(this._intervalCounterId);
            this._intervalCounterId = null;
        }
    };
    NotifierService.prototype.completeProgressBar = function () {
        var _this = this;
        this.progress = 100;
        this.stopProgressBar();
        setTimeout(function () {
            // Hide it away
            _this.config.progressBar.status = 'vhide';
            setTimeout(function () {
                // Drop to 0
                _this.progress = 0;
            }, 250);
        }, 250);
    };
    NotifierService.prototype.alert = function (heading, content, type, duration) {
        if (this.alrtTimer) {
            clearTimeout(this.alrtTimer);
        }
        this.config.msg.status = 'show';
        this.config.msg.heading = heading;
        this.config.msg.content = content;
        this.config.msg.type = type;
        this.config.msg.duration = duration;
        this.dataObserver.next(this.config);
        var _self = this;
        if (duration) {
            this.alrtTimer = setTimeout(function () {
                _self.config.msg.status = 'hide';
                _self.dataObserver.next(_self.config);
            }, duration);
        }
    };
    NotifierService.prototype.clearAlert = function () {
        clearTimeout(this.alrtTimer);
        this.config.msg.status = 'hide';
        this.dataObserver.next(this.config);
    };
    NotifierService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NotifierService);
    return NotifierService;
}());



/***/ }),

/***/ "./src/app/shared/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifier_notifier_service__ = __webpack_require__("./src/app/shared/notifier/notifier.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import our authentication service


var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, notifier) {
        this.authService = authService;
        this.router = router;
        this.notifier = notifier;
    }
    AuthGuard.prototype.canActivate = function () {
        // this.notifier.start();
        // If user is not logged in we'll send them to the homepage 
        // this.notifier.start();
        // If user is not logged in we'll send them to the homepage
        if (!this.authService.loggedIn()) {
            this.authService.logout();
            this.router.navigate(['/admin/auth/login']);
            this.notifier.alert('Permission denied!', "Login Again!", "danger", 100000);
            return false;
        }
        var admin = this.authService.admin();
        if (admin == null || (admin.type != "ADMIN" && admin.type != "STAFF")) {
            this.authService.logout();
            this.router.navigate(['/admin/auth/login']);
            this.notifier.alert('Permission denied!', "Login Again!", "danger", 100000);
            return false;
        }
        return true;
    };
    AuthGuard.prototype.canActivateChild = function () {
        // If user is not logged in we'll send them to the homepage 
        if (!this.authService.loggedIn()) {
            this.authService.logout();
            this.router.navigate(['/admin/auth/login']);
            return false;
        }
        var admin = this.authService.admin();
        if (admin == null || (admin.type != "ADMIN" && admin.type != "STAFF")) {
            this.authService.logout();
            this.router.navigate(['/admin/auth/login']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__notifier_notifier_service__["a" /* NotifierService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// src/app/auth/token.interceptor.ts








var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(injector) {
        this.injector = injector;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        var authService = this.injector.get(__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]);
        request = request.clone({ setHeaders: { token: authService.getAuthToken() } });
        return next.handle(request).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpResponse */]) {
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401) {
                    authService.logout();
                    // redirect to the login route
                    // or show a modal
                }
            }
        }).catch(function (err) {
            console.log(err);
            // let parsedError = Object.assign({}, err, { error: err.error });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.error);
        });
        ;
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__("./src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.authObservable = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    AuthService.prototype.login = function (username, password) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppConfig */].BASICS.API_URL + "/auth/signin", { username: username, password: password });
    };
    AuthService.prototype.signup = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppConfig */].BASICS.API_URL + "/auth/signup", data);
    };
    AuthService.prototype.processForgotPass = function (email) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppConfig */].BASICS.API_URL + "/auth/forgot-password", { email: email });
    };
    AuthService.prototype.loggedIn = function () {
        var token = window.localStorage.getItem("authToken");
        var user = window.localStorage.getItem("user");
        if (token && token != 'undefined' && token !== null && user && user != 'undefined' && user !== null) {
            return true;
        }
        return false;
    };
    AuthService.prototype.logout = function () {
        window.localStorage.removeItem("authToken");
        // this.authObservable.next({loggedOut:true});
        //^For use in LoginWindow
        this.router.navigate(["/admin/auth/login"]);
        return true;
    };
    AuthService.prototype.user = function () {
        var user = window.localStorage.getItem("user");
        if (user) {
            user = JSON.parse(user);
            return user;
        }
        return null;
    };
    AuthService.prototype.admin = function () {
        var u = window.localStorage.getItem("user");
        if (u) {
            var user = JSON.parse(u);
        }
        if (user && (user.type == "ADMIN" || user.type == "STAFF")) {
            return user;
        }
        return null;
    };
    AuthService.prototype.faculty = function () {
        var u = window.localStorage.getItem("user");
        if (u) {
            var user = JSON.parse(u);
        }
        if (user && user.type == "FACULTY") {
            return user;
        }
        return null;
    };
    AuthService.prototype.student = function () {
        var u = window.localStorage.getItem("user");
        if (u) {
            var user = JSON.parse(u);
        }
        if (user && user.type == "STUDENT") {
            return user;
        }
        return null;
    };
    AuthService.prototype.staff = function () {
        var u = window.localStorage.getItem("user");
        if (u) {
            var user = JSON.parse(u);
        }
        if (user && user.type == "STAFF") {
            return user;
        }
        return null;
    };
    AuthService.prototype.getAuthToken = function () {
        return window.localStorage.getItem("authToken");
    };
    AuthService.prototype.getDefaultSession = function () {
        return 'null';
    };
    AuthService.prototype.getDefaultCenter = function () {
        return 'null';
    };
    AuthService.prototype.getUserPerms = function (userPemrs, app, activity, reqPerms) {
        var perms = {};
        if (!userPemrs) {
            return perms;
        }
        if (userPemrs[0] == "ALL" || userPemrs.all) {
            for (var i = 0; i < reqPerms.length; i++) {
                perms[reqPerms[i]] = true;
            }
        }
        if (!userPemrs[app]) {
            return perms;
        }
        if (!userPemrs[app][activity]) {
            return perms;
        }
        for (var i = 0; i < reqPerms.length; i++) {
            if (userPemrs[app][activity][reqPerms[i]]) {
                perms[reqPerms[i]] = true;
            }
        }
        return perms;
    };
    AuthService.prototype.getDefaultParams = function () {
        var u = window.localStorage.getItem("user");
        if (u) {
            var user = JSON.parse(u);
            return user.defaultParams;
        }
        else {
            return null;
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n    <div class=\"menu-sec favlinks\"  >\n        <ul class=\"sidebar-menu\">\n            <li routerLinkActive=\"active\" *ngFor=\"let link of sideLinks; let fli=index;\">\n                <a routerLink=\"{{link.url}}\">\n                    <span class=\"glyphicon glyphicon-cd link-icon\"></span>\n                    <span class=\"link-text\">{{link.title}}</span>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar__ = __webpack_require__("./src/app/shared/sidebar/sidebar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__sidebar__["a" /* AppSidebar */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__sidebar__["a" /* AppSidebar */]],
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppSidebar = /** @class */ (function () {
    function AppSidebar() {
    }
    AppSidebar.prototype.ngOnInit = function () {
        this.sideLinks = [
            {
                title: 'Home',
                url: '#'
            }
        ];
    };
    AppSidebar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/shared/sidebar/sidebar.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppSidebar);
    return AppSidebar;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/local.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalConfig; });
var LocalConfig = /** @class */ (function () {
    function LocalConfig() {
        this.basicsConfig = {
            API_URL: 'http://api.qeedagame.com/api',
            INTEK_API_URL: 'https://intek.edukitapp.com',
            CDN_URL: 'https://hub.iesmaster.org',
        };
    }
    LocalConfig.prototype.getBasics = function () {
        return this.basicsConfig;
    };
    return LocalConfig;
}());



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map