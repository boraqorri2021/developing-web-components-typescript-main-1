"use strict";
exports.__esModule = true;
exports.Electronic = void 0;
var Board_js_1 = require("./Board.js");
var Electronic = /** @class */ (function () {
    function Electronic(name, location, fontcolor, onImage, offImage) {
        var _this = this;
        this.name = name;
        this.location = location;
        this.fontcolor = fontcolor;
        this.onImage = onImage;
        this.offImage = offImage;
        this.electronicState = true;
        var element = document.getElementById('gridItemID' + this.location);
        element.innerHTML = "<div id=\"childItemID" + this.location + "\">\n        <button type=\"button\" style=\"border: none;background-color: none;background: none;float: right;margin-top: -40px;margin-right: -30px;\" \n        id=\"removebtnID" + this.location + "\"> x </button>\n        <img style=\"display:block;width: 80px; height: 50px;margin:auto\" id=\"imgItemOn" + this.location + "\" src=\"" + this.onImage + "\" />\n        <img style=\"width: 80px; height: 50px; display:none; margin:auto\" id=\"imgItemOff" + this.location + "\" src=\"" + this.offImage + "\" />\n        <label style=\"color:" + fontcolor + ";\">" + name + "</label>\n        <label  id=\"stateOnLbl" + this.location + "\" style=\"color:green;float: right;margin-right: -30px;margin-top: -7px;\">On</label>\n        <label style=\"display:none;\" id=\"stateOffLbl" + this.location + "\" style=\"color:red;float: right;margin-right: -30px;margin-top: -7px;\">Off</label>\n        </div>";
        //Events when Clicking the image to Switch state and remove Component
        var imgOnClick = document.getElementById("imgItemOn" + this.location);
        imgOnClick.addEventListener("click", function (e) { return _this.SwitchState(_this.location); });
        var imgOffClick = document.getElementById("imgItemOff" + location);
        imgOffClick.addEventListener("click", function (e) { return _this.SwitchState(_this.location); });
        var imgRemoveClick = document.getElementById("removebtnID" + this.location);
        imgRemoveClick.addEventListener("click", function (e) { return Board_js_1.Board.RemoveElectricalComponent(_this.location); });
    }
    Object.defineProperty(Electronic.prototype, "name", {
        //get and sets: 
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
    Object.defineProperty(Electronic.prototype, "State", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
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
    //Method to return Electrical Object that is located in given location
    Electronic.getComponentByLocation = function (location) {
        var i = 0;
        for (i = 0; i < Board_js_1.Board.electricComponents.length; i++) {
            if (Board_js_1.Board.electricComponents[i].location == location) {
                return Board_js_1.Board.electricComponents[i];
            }
        }
        return null;
    };
    Electronic.prototype.SetState = function (location) {
    };
    //Method for switching state, the board property is added to tell us if state is changing when Board state is changing or
    //after clicking the electrical item image
    Electronic.prototype.SwitchToOnState = function (location) {
        this.State = true;
        this.electronicState = true;
        var electricComponentOffImage = document.getElementById('imgItemOff' + location);
        var electricComponentOnImage = document.getElementById('imgItemOn' + location);
        var electricComponentOfflbl = document.getElementById('stateOffLbl' + location);
        var electricComponentOnlbl = document.getElementById('stateOnLbl' + location);
        electricComponentOnImage.setAttribute("style", "display:block;width: 80px; height: 50px;margin:auto");
        electricComponentOffImage.setAttribute("style", "display:none;width: 80px; height: 50px;margin:auto");
        electricComponentOnlbl.setAttribute("style", "display:block;color:green;float: right;margin-right: -30px;margin-top: -7px;");
        electricComponentOfflbl.setAttribute("style", "display:none;color:red;float: right;margin-right: -30px;margin-top: -7px;");
    };
    Electronic.prototype.SwitchToOffState = function (location) {
        this.State = false;
        var electricComponentOffImage = document.getElementById('imgItemOff' + location);
        var electricComponentOnImage = document.getElementById('imgItemOn' + location);
        var electricComponentOfflbl = document.getElementById('stateOffLbl' + location);
        var electricComponentOnlbl = document.getElementById('stateOnLbl' + location);
        electricComponentOffImage.setAttribute("style", "display:block;width: 80px; height: 50px;margin:auto");
        electricComponentOnImage.setAttribute("style", "display:none;width: 80px; height: 50px;margin:auto");
        electricComponentOnlbl.setAttribute("style", "display:none;color:green;float: right;margin-right: -30px;margin-top: -7px;");
        electricComponentOfflbl.setAttribute("style", "display:block;color:red;float: right;margin-right: -30px;margin-top: -7px;");
    };
    Electronic.prototype.SwitchState = function (location) {
        if (Board_js_1.Board.boardState == false && this.electronicState == false) {
            this.electronicState = true;
            this.SwitchToOffState(location);
        }
        else if (Board_js_1.Board.boardState == false && this.electronicState == true) {
            this.electronicState = false;
            this.SwitchToOffState(location);
        }
        else if (Board_js_1.Board.boardState == true && this.electronicState == false) {
            this.SwitchToOnState(location);
        }
        else {
            this.electronicState = false;
            this.SwitchToOffState(location);
        }
    };
    return Electronic;
}());
exports.Electronic = Electronic;
