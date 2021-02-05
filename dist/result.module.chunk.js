webpackJsonp(["result.module"],{

/***/ "./src/app/result/result.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"result=='won'\" >\n  Congratulations!<br>\n  You have won the game!\n</p>\n<p *ngIf=\"result=='lost'\" >\n    Better luck next time!<br>\n    You have lost the game!\n</p>\n\n\n"

/***/ }),

/***/ "./src/app/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_game_service__ = __webpack_require__("./src/app/shared/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_notifier_notifier_service__ = __webpack_require__("./src/app/shared/notifier/notifier.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultComponent = /** @class */ (function () {
    function ResultComponent(activatedRoute, gameService, notifier, authService) {
        this.activatedRoute = activatedRoute;
        this.gameService = gameService;
        this.notifier = notifier;
        this.authService = authService;
        window.localStorage.removeItem("game");
    }
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.gameId = params['gameId'];
            _this.loadGame();
        });
    };
    ResultComponent.prototype.loadGame = function () {
        var _this = this;
        var thisUser = this.authService.user();
        if (!thisUser) {
            console.log("session expired");
            return;
        }
        this.gameService.getFinishedGame(this.gameId).subscribe(function (res) {
            var thisUserSide = null;
            if (thisUser.id == res.playerB) {
                thisUserSide = "B";
            }
            else if (thisUser.id == res.playerA) {
                thisUserSide = "A";
            }
            else {
                alert("You did not belong to this game!");
                return;
            }
            _this.game = res;
            var scoreObj = { "A": 'scoreA', B: "scoreB" };
            var scoreObjOpp = { "B": 'scoreA', A: "scoreB" };
            if (res[scoreObj[thisUserSide]] > res[scoreObjOpp[thisUserSide]]) {
                _this.result = "won";
            }
            else {
                _this.result = "lost";
            }
        }, function (err) {
            _this.notifier.alert(err.code, err.message, "danger", 2000);
        });
    };
    ResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-result',
            template: __webpack_require__("./src/app/result/result.component.html"),
            styles: [__webpack_require__("./src/app/result/result.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__shared_services_game_service__["a" /* GameService */], __WEBPACK_IMPORTED_MODULE_4__shared_notifier_notifier_service__["a" /* NotifierService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/result/result.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultModule", function() { return ResultModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_component__ = __webpack_require__("./src/app/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_game_service__ = __webpack_require__("./src/app/shared/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__result_component__["a" /* ResultComponent */], canActivate: [], pathMatch: 'full' },
];
;
var ResultModule = /** @class */ (function () {
    function ResultModule() {
    }
    ResultModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__result_component__["a" /* ResultComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_game_service__["a" /* GameService */]]
        })
    ], ResultModule);
    return ResultModule;
}());



/***/ })

});
//# sourceMappingURL=result.module.chunk.js.map