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
exports.ElectricComponent = void 0;
var Electric_js_1 = require("./Electric.js");
var ElectricComponent = /** @class */ (function (_super) {
    __extends(ElectricComponent, _super);
    function ElectricComponent() {
        return _super.call(this) || this;
        // board.switchState();
    }
    ElectricComponent.prototype.connectedCallback = function () {
        this.render();
    };
    ElectricComponent.prototype.render = function () {
        var _this = this;
        this.innerHTML = "\n    <form id=\"electricComponentFormID\">\n    <h4 style=\"border-bottom:solid;\">Add a new electric component: </h4>\n\n    <div class=\"form-group\" style=\"height: 85px;\">\n    <label for=\"Name\">Name :</label>\n    <input type=\"text\" class=\"form-control\" id=\"nameID\" placeholder=\"Enter name\">\n  </div>\n  <div class=\"form-group\" style=\"height: 75px;\">\n    <label for=\"locationID\">Location :</label>\n    <input type=\"number\" class=\"form-control\" id=\"locationID\" placeholder=\"Location\">\n  </div>\n  <div class=\"form-group\" style=\"height: 65px;\">\n  <label for=\"colorID\">FontColor :</label>\n  <input type=\"color\" class=\"form-control\" id=\"colorID\" style=\"width:200px;\" value=\"#ff0000\">\n</div>\n<div class=\"form-group\" style=\"height: 80px;\">\n  <label for=\"onImageID\">Image for On State :</label>\n  <input type=\"file\" class=\"form-control\" id=\"onImageID\" onchange=\"loadOnFile(event)\">\n</div>\n<div class=\"form-group\" style=\"height: 80px;\">\n  <label for=\"offImageID\">Image for Off State :</label>\n  <input type=\"file\" class=\"form-control\" id=\"offImageID\" onchange=\"loadOffFile(event)\">\n</div>\n    <hr />\n    <img id=\"onImg\" style=\"width:50px; height=\"50px;\" />\n    <img id=\"offImg\" style=\"width:50px; height=\"50px;\"/>\n    <button type=\"button\" class=\"btn btn-primary\" style=\"float:right;\">Add Electric Component</button>\n  </form>\n    ";
        this.querySelectorAll('button').forEach(function (btn) {
            btn.addEventListener('click', function (e) { return _this.AddElectricComponent(); });
        });
    };
    ElectricComponent.prototype.AddElectricComponent = function () {
        var i;
        var gridCells = "";
        var columnNr = "";
        var rows = parseInt(document.getElementById("rowId").value);
        var columns = parseInt(document.getElementById("columnId").value);
        var electricComponentName = document.getElementById('nameID').value;
        var electricComponentLocation = parseInt(document.getElementById("locationID").value);
        var electricComponentForecolor = document.getElementById('colorID').value;
        var electricComponentOnImage = document.getElementById('onImageID');
        var electricComponentOffImage = document.getElementById('offImageID');
        var onImg = document.getElementById('onImg').src;
        var offImg = document.getElementById('offImg').src;
        var electricalComponent = new Electric_js_1.Electronic(electricComponentName, electricComponentLocation, electricComponentForecolor, onImg, offImg);
    };
    return ElectricComponent;
}(HTMLElement));
exports.ElectricComponent = ElectricComponent;
customElements.define('electric-components', ElectricComponent);
