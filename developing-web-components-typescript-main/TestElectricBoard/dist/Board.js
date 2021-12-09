"use strict";
exports.__esModule = true;
exports.Board = void 0;
var Electric_js_1 = require("./Electric.js");
var Board = /** @class */ (function () {
    function Board(rows, columns) {
        var _this = this;
        this.state = true;
        this.rows = rows;
        this.columns = columns;
        this.backgroundColor = "#dcf1dc";
        var element = document.getElementById('gridComponent');
        var i;
        var gridCells = "";
        var columnNr = "";
        //after getting the size of the board, we create the items in the grid, displayng the location also on each item
        for (i = 1; i <= rows * columns; i++) {
            gridCells += "<div class=\"grid-item\" id=\"gridItemID" + i + "\">" +
                "<label style=\"\n      font-size: small;\n      color: #a6cdee;\n      float: right;\n      margin-top: 19px;\n      padding-bottom: -18px;\n      \">" + i + "</label></div>";
        }
        for (i = 0; i < columns; i++) {
            columnNr += "auto ";
        }
        element.setAttribute("style", "grid-template-columns:" + columnNr + ";");
        element.innerHTML = "<div class=\"alert alert-info\" role=\"alert\" style=\"width:97%\">\n    Click on the icon to switch state!\n    </div>\n    <table style=\"width: 20%;float: left;margin-right: 25%;margin-bottom:10px;\">\n    <tr>\n    <td><img id=\"switchingID\" style=\"width: 80px; height: 42px;\" src=\"./Images/switch-on-button-vectors.jpg\" /></td>\n    </tr>\n    </table>" +
            "<div id=\"gridcontainerID\" class=\"grid-container\"> " + gridCells + "</div>";
        var grid = document.getElementById('gridcontainerID');
        var electricComponentForm = document.getElementById('electricComponentDivID');
        grid.setAttribute("style", "grid-template-columns:" + columnNr + ";background-color:" + this.backgroundColor + ";");
        electricComponentForm.setAttribute("style", "display: block;");
        var switchBtn = document.getElementById("switchingID");
        switchBtn.addEventListener("click", function (e) { return _this.switchState(); });
    }
    Object.defineProperty(Board.prototype, "state", {
        //get and sets: 
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "rows", {
        get: function () {
            return this._rows;
        },
        set: function (value) {
            this._rows = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (value) {
            this._columns = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "backgroundColor", {
        get: function () {
            return this._backgroundColor;
        },
        set: function (value) {
            this._backgroundColor = value;
        },
        enumerable: false,
        configurable: true
    });
    Board.prototype.switchState = function () {
        var grid = document.getElementById('gridcontainerID');
        var img = document.getElementById('switchingID');
        var i;
        //If previous board state was true then the board is going to switch into Off.
        if (this.state == true) {
            this.state = Board.boardState = false;
            this.backgroundColor = "#b0aaaa";
            grid.style.backgroundColor = this.backgroundColor;
            img.src = "./Images/switch-off-button-vectors (2).jpg";
            //All electrical components are goint to display as off(changing the image and label to Off and the State parameter, but 
            //electronic state is not going to change.)
            for (i = 0; i < Board.electricComponents.length; i++) {
                Board.electricComponents[i].SwitchToOffState(Board.electricComponents[i].location);
            }
        }
        else {
            this.state = Board.boardState = true;
            this.backgroundColor = "#dcf1dc";
            ;
            grid.style.backgroundColor = this.backgroundColor;
            img.src = "./Images/switch-on-button-vectors.jpg";
            //If board is switching into On state, then all electrical devices are going to switch to their previous
            //state, If state was On(true) then the image and label are going to change into On state. Electrical state does not change.
            for (i = 0; i < Board.electricComponents.length; i++) {
                if (Board.electricComponents[i].electronicState)
                    Board.electricComponents[i].SwitchToOnState(Board.electricComponents[i].location);
                else
                    Board.electricComponents[i].SwitchToOffState(Board.electricComponents[i].location);
            }
        }
    };
    //Add Electrical Component, 
    Board.AddElectricalComponent = function (name, location, fontcolor, onImage, offImage) {
        var newElectronic = new Electric_js_1.Electronic(name, location, fontcolor, onImage, offImage);
        //After creating the object, we add the object to Board as an array item.
        Board.electricComponents.push(newElectronic);
    };
    //After clicking the remove button, the electrical object is removed from the array in Board class and the div that 
    //was dispayed in the UI is removed also.
    Board.RemoveElectricalComponent = function (location) {
        var index = Board.electricComponents.indexOf(Electric_js_1.Electronic.getComponentByLocation(location));
        Board.electricComponents.splice(index, 1);
        var electricComponent = document.getElementById('childItemID' + location);
        electricComponent.remove();
    };
    Board.electricComponents = [];
    Board.boardState = true;
    return Board;
}());
exports.Board = Board;
