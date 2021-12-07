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
        this.innerHTML = "\n    <form id=\"electricComponentFormID\">\n    <h4 style=\"border-bottom:solid;\">Add a new electric component: </h4>\n    <div class=\"form-group\" style=\"height: 80px;\">\n    <label for=\"offImageID\">Select Electronic Category :</label>\n    <select ID = \"dropdownId\">\n              <option value = \"Television\">Television</option>\n              <option value = \"Computer/Laptop\">Computer/Laptop</option>\n              <option value = \"Refrigerator\">Refrigerator</option>\n              <option value = \"Charger\">Charger</option>\n              <option value = \"Electric Cooker\">Electric Cooker</option>\n              <option value = \"Other\" selected>Other</option>\n    </select>\n  </div>\n    <div class=\"form-group\" style=\"height: 85px;\">\n    <label for=\"Name\">Name :</label>\n    <input type=\"text\" class=\"form-control\" id=\"nameID\" placeholder=\"Enter name\">\n  </div>\n  <div class=\"form-group\" style=\"height: 75px;\">\n    <label for=\"locationID\">Location :</label>\n    <input type=\"number\" class=\"form-control\" id=\"locationID\" placeholder=\"Location\">\n  </div>\n  <div class=\"form-group\" style=\"height: 65px;margin-bottom:40px;\">\n  <label for=\"colorID\">Font Color :</label>\n  <input type=\"color\" class=\"form-control\" id=\"colorID\" style=\"width:200px;\" value=\"#ff0000\">\n</div>\n<div class=\"form-group\"\">\n<label for=\"can\" style=\"position: absolute;margin-top: -30px;\">Costumize Image :</label>\n<canvas id=\"can\" width=\"150\" height=\"150\" style=\"border:1px solid;\"></canvas>\n<img id=\"canvasimg\" style=\"margin-top:-145px\" style=\"display:none;\">\n        <input type=\"button\" value=\"Save image\" id=\"btn\" size=\"30\"  class=\"btn btn-success\" onclick=\"save()\" style=\"margin-left:144px; top:55%;left:10%;\">\n        <input type=\"button\" value=\"Clear\" id=\"clr\" size=\"23\" class=\"btn btn-danger\" onclick=\"erase()\" style=\" top:55%;left:15%;\">\n</div>\n    <button type=\"button\" class=\"btn btn-primary\" style=\"float:right;margin-top:-30px;\">Add Electric Component</button>\n  </form>\n    ";
        this.querySelectorAll('button').forEach(function (btn) {
            btn.addEventListener('click', function (e) { return _this.AddElectricComponent(); });
        });
    };
    ElectricComponent.prototype.AddElectricComponent = function () {
        var onImg;
        var offImg;
        //Getting values for creating an object of  Electrical type
        var electricComponentName = document.getElementById('nameID').value;
        var electricComponentLocation = parseInt(document.getElementById("locationID").value);
        var electricComponentForecolor = document.getElementById('colorID').value;
        var canvasImg = document.getElementById('canvasimg').src;
        var displayimage = document.getElementById('canvasimg').style.display;
        if (Electric_js_1.Electronic.getComponentByLocation(electricComponentLocation) != null) {
            alert("You can not add more electronic components at this location!");
            return;
        }
        if (displayimage == "none") {
            var category = document.getElementById("dropdownId").value;
            switch (category) {
                case "Television":
                    onImg = "./Images/OnTV.jpg";
                    offImg = "./Images/OffTV.jpg";
                    break;
                case "Computer/Laptop":
                    onImg = "./Images/computer.jpg";
                    offImg = "./Images/computer-off.jpg";
                    break;
                case "Refrigerator":
                    onImg = "./Images/fridge.jpg";
                    offImg = "./Images/fridge-off.jpg";
                    break;
                case "Charger":
                    onImg = "./charger.jpg";
                    offImg = "./Images/chargeroff.jpg";
                    break;
                case "Electric Cooker":
                    onImg = "./Images/cooker";
                    offImg = "./Images/cooker-off.jpg";
                    break;
                default:
                    onImg = "./Images/onstate.jpg";
                    offImg = "./Images/offState.jpg";
            }
        }
        else {
            onImg = offImg = canvasImg;
        }
        var electricalComponent = new Electric_js_1.Electronic(electricComponentName, electricComponentLocation, electricComponentForecolor, onImg, offImg);
    };
    return ElectricComponent;
}(HTMLElement));
exports.ElectricComponent = ElectricComponent;
customElements.define('electric-components', ElectricComponent);
