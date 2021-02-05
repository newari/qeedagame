webpackJsonp(["common"],{

/***/ "./src/app/shared/services/game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var API_URL = "http://localhost:1337";

var GameService = /** @class */ (function () {
    function GameService(http) {
        this.http = http;
    }
    GameService.prototype.getFinishedGame = function (gameId) {
        return this.http.get(API_URL + "/api/finished-game/" + gameId);
    };
    GameService.prototype.roll = function (data) {
        return this.http.post(API_URL + "/api/game/move", data);
    };
    GameService.prototype.start = function (data) {
        return this.http.post(API_URL + "/api/game/start", data);
    };
    GameService.prototype.setGameCookie = function (data) {
        return window.localStorage.setItem("game", JSON.stringify(data));
    };
    GameService.prototype.getGameCookie = function () {
        var game = window.localStorage.getItem("game");
        if (game) {
            return JSON.parse(game);
        }
        else {
            return false;
        }
    };
    GameService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], GameService);
    return GameService;
}());



/***/ })

});
//# sourceMappingURL=common.chunk.js.map