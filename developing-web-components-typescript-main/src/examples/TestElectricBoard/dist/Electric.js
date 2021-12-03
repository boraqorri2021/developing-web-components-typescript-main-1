"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Electronic = void 0;
var Board_js_1 = require("./Board.js");
var Electronic = /** @class */ (function (_super) {
    __extends(Electronic, _super);
    function Electronic(name, location, fontcolor, onImage, offImage) {
        var _this = _super.call(this, 0, 0) || this;
        if (name == null && location == null && fontcolor == null && onImage == null && offImage == null) {
        }
        else {
            _this.name = name;
            _this.location = location;
            _this.fontcolor = fontcolor;
            _this.onImage = onImage;
            _this.offImage = offImage;
            _this.electronicState = true;
            var element = document.getElementById('gridItemID' + _this.location);
            element.innerHTML = "<img style=\"display:block;width: 80px; height: 50px;margin:auto\" id=\"imgItemOn" + _this.location + "\" src=\"" + _this.onImage + "\" />\n        <img style=\"width: 80px; height: 50px; display:none; margin:auto\" id=\"imgItemOff" + _this.location + "\" src=\"" + _this.offImage + "\" />\n        <label id=\"lblNameID\" style=\"color:" + fontcolor + ";\">" + name + "</label>";
            var imgOnClick = document.getElementById("imgItemOn" + _this.location);
            imgOnClick.addEventListener("click", function (e) { return _this.SwitchState(_this.location); });
            var imgClick = document.getElementById("imgItemOff" + location);
            imgClick.addEventListener("click", function (e) { return _this.SwitchState(_this.location); });
            Electronic.components.push(_this.getInstance());
            Board_js_1.Board.electricComponents = Electronic.components;
        }
        return _this;
    }
    Electronic.prototype.getInstance = function () {
        var electronic = new Electronic(null, null, null, null, null);
        electronic.name = this.name;
        electronic.fontcolor = this.fontcolor;
        electronic.location = this.location;
        electronic.onImage = this.onImage;
        electronic.offImage = this.offImage;
        return electronic;
    };
    Object.defineProperty(Electronic.prototype, "name", {
        //get and sets: turn on/off
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Electronic.prototype, "fontcolor", {
        get: function () {
            return this._fontcolor;
        },
        set: function (value) {
            this._fontcolor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Electronic.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Electronic.prototype, "electronicState", {
        get: function () {
            return this._electronicState;
        },
        set: function (value) {
            this._electronicState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Electronic.prototype, "onImage", {
        get: function () {
            return this._onImage;
        },
        set: function (value) {
            this._onImage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Electronic.prototype, "offImage", {
        get: function () {
            return this._offImage;
        },
        set: function (value) {
            this._offImage = value;
        },
        enumerable: false,
        configurable: true
    });
    Electronic.prototype.SwitchToOnState = function (location) {
        var electricComponentOffImage = document.getElementById('imgItemOff' + location);
        var electricComponentOnImage = document.getElementById('imgItemOn' + location);
        this.electronicState = true;
        electricComponentOnImage.setAttribute("style", "display:block;width: 80px; height: 50px;margin:auto");
        electricComponentOffImage.setAttribute("style", "display:none;width: 80px; height: 50px;margin:auto");
    };
    Electronic.prototype.SwitchToOffState = function (location) {
        var electricComponentOffImage = document.getElementById('imgItemOff' + location);
        var electricComponentOnImage = document.getElementById('imgItemOn' + location);
        this.electronicState = false;
        electricComponentOffImage.setAttribute("style", "display:block;width: 80px; height: 50px;margin:auto");
        electricComponentOnImage.setAttribute("style", "display:none;width: 80px; height: 50px;margin:auto");
    };
    Electronic.prototype.SwitchState = function (location) {
        if (Board_js_1.Board.boardState == false) {
            alert("Electronic Board is turned off!");
            return;
        }
        var electricComponentOffImage = document.getElementById('imgItemOff' + location);
        var electricComponentOnImage = document.getElementById('imgItemOn' + location);
        if (this.electronicState == true) {
            this.electronicState = false;
            electricComponentOffImage.setAttribute("style", "display:block;width: 80px; height: 50px;margin:auto");
            electricComponentOnImage.setAttribute("style", "display:none;width: 80px; height: 50px;margin:auto");
        }
        else {
            this.electronicState = true;
            electricComponentOnImage.setAttribute("style", "display:block;width: 80px; height: 50px;margin:auto");
            electricComponentOffImage.setAttribute("style", "display:none;width: 80px; height: 50px;margin:auto");
        }
    };
    Electronic.components = [];
    return Electronic;
}(Board_js_1.Board));
exports.Electronic = Electronic;
