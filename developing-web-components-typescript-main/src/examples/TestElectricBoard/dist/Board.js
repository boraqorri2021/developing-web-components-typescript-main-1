"use strict";
exports.__esModule = true;
exports.Board = void 0;
var Board = /** @class */ (function () {
    function Board(rows, columns) {
        var _this = this;
        this.state = true;
        this.rows = rows;
        this.columns = columns;
        this.backgroundColor = "#dcf1dc";
        if (rows == 0 && columns == 0) {
        }
        else {
            var element = document.getElementById('gridComponent');
            var i;
            var gridCells = "";
            var columnNr = "";
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
    }
    Board.prototype.getInstance = function () {
        var boardC = new Board(0, 0);
        boardC.state = this.state;
        boardC.columns = this.columns;
        boardC.rows = this.rows;
        boardC.backgroundColor = this.backgroundColor;
        Board.board = boardC;
        return Board.board;
    };
    Object.defineProperty(Board.prototype, "state", {
        //get and sets: turn on/off, background, size of the board, electricnumberelements
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
        if (this.state == true) {
            this.state = Board.boardState = false;
            this.backgroundColor = "#b0aaaa";
            grid.style.backgroundColor = this.backgroundColor;
            img.src = "./Images/switch-off-button-vectors (2).jpg";
            var i;
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
        }
    };
    Board.electricComponents = [];
    Board.boardState = true;
    return Board;
}());
exports.Board = Board;
